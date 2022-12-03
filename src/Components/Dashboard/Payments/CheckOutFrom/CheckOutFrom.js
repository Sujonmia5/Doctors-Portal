import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const CheckOutFrom = ({ data }) => {
    const { price, patient, email, _id } = data
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState("");
    const [transactionId, setTransactionId] = useState("");
    const stripe = useStripe()
    const elements = useElements()
    const [cardError, setCardError] = useState('')


    useEffect(() => {
        fetch('http://localhost:5500/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })

        })
            .then(res => res.json())
            .then(data => {
                setClientSecret(data.clientSecret)
                console.log(data)
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)
        if (!stripe || !elements) {
            setProcessing(false)
            return;
        }

        const card = elements.getElement(CardElement)
        if (card === null) {
            setProcessing(false)
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setProcessing(false)
            setCardError(error.message);
        }
        else {
            setCardError('')
        }
        setPaymentSuccess('')
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patient,
                        email,
                    },
                },
            },
        );
        if (confirmError) {
            setCardError(confirmError.message)
            return;
        }
        console.log(paymentIntent);
        if (paymentIntent.status === "succeeded") {
            const paymentData = {
                transactionId: paymentIntent.id,
                price,
                patient,
                email,
                bookingId: _id,
            }
            fetch('http://localhost:5500/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(paymentData)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged) {
                        toast.success('Congrats! your Payments Paid completed')
                        setTransactionId(paymentIntent.id)
                        setPaymentSuccess('Congrats! your Payments Paid completed')
                    }
                })

        }
        setProcessing(false)
    }
    return (
        <div>
            {
                cardError && <p className='text-red-600 text-xl my-5'>{cardError}</p>
            }
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-primary btn-sm mt-5 disabled:bg-gray-700 disabled:text-gray-400' type="submit" disabled={!stripe || !clientSecret || processing || paymentSuccess}>
                    Pay
                </button>
            </form>
            {
                paymentSuccess &&
                <>
                    <p className='text-green-500 mt-5'>{paymentSuccess}</p>
                    <p className='text-gray-800'>Transaction Id: {transactionId}</p>
                </>
            }

        </div>
    );
};

export default CheckOutFrom;