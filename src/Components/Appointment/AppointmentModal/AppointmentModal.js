import { format } from 'date-fns';
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../Context/AuthProvider'

const AppointmentModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext)
    const { name: treatmentName, slots, price } = treatment
    const date = selectedDate && format(selectedDate, 'PP')

    const onSubmitHandle = (e) => {
        e.preventDefault()
        const from = e.target;
        const slot = from.slot.value;
        const name = from.name.value;
        const email = from.email.value;
        const number = from.phone.value;
        const booking = {
            booking: { name: user.displayName, userEmail: user.email },
            date,
            slot,
            treatment: treatmentName,
            patient: name,
            email,
            number,
            price,
        }
        // console.log(booking);
        fetch('http://localhost:5500/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire('Booking confirm', '', 'success')
                    refetch()
                    setTreatment(null)
                }
                else {
                    setTreatment(null)
                    Swal.fire(`${data.message}`, '', 'error')
                }
            })
    }
    return (
        <>
            <input type="checkbox" id="option-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setTreatment(null)} htmlFor="option-modal" className="btn btn-sm btn-circle bg-slate-700 absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center my-2">{treatmentName}</h3>
                    <form onSubmit={onSubmitHandle} className='flex flex-col justify-center items-center space-y-2 mx-auto'>
                        <input type="text" defaultValue={date} disabled className="input input-bordered disabled:bg-gray-200 border-none disabled:text-accent w-full max-w-xs h-10" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, id) => <option
                                    key={id}
                                >{slot}</option>)
                            }
                        </select>

                        <input name='name' type="name" defaultValue={user ? user.displayName : ''} placeholder="Enter your name" className="input input-bordered w-full max-w-xs h-10" />

                        <input name='email' type="email" defaultValue={user ? user.email : ''} disabled placeholder="Enter your Email" className="input input-bordered w-full disabled:bg-gray-200 max-w-xs h-10" />
                        <input name='phone' type="text" placeholder="Enter your Phone number" className="input input-bordered w-full  max-w-xs h-10" />

                        <button type="submit" className='bg-primary btn w-full max-w-xs' >Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;