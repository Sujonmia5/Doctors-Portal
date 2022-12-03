import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckOutFrom from './CheckOutFrom/CheckOutFrom';

const stripePromise = loadStripe(process.env.REACT_APP_payments_KEY);

const Payments = () => {
    const data = useLoaderData()


    return (
        <div>
            <h1 className='text-accent text-2xl font-semibold m-10'>This is Payments Page</h1>
            <p className='text-accent text-xl ml-10 font-semibold '> Payment For {data.treatment} Date:{data.date} Time: {data.slot}</p>
            <p className='text-accent text-xl ml-10 font-semibold'>Treatment Fee: <span className='text-primary'>{data.price}$</span></p>
            <div className='w-1/3 m-10'>
                <Elements stripe={stripePromise}>
                    <CheckOutFrom
                        data={data} />
                </Elements>
            </div>
        </div>
    );
};

export default Payments;