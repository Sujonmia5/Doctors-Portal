import { format } from 'date-fns';
import React from 'react';

const AppointmentModal = ({ treatment, selectedDate, setTreatment }) => {
    console.log(selectedDate);
    const { name, slots } = treatment
    const date = selectedDate && format(selectedDate, 'PP')

    const onSubmitHandle = (e) => {
        e.preventDefault()
        const from = e.target;
        const slot = from.slot.value;
        const name = from.name.value;
        const email = from.email.value;
        console.log(date, slot, name, email);
    }
    return (
        <>
            <input type="checkbox" id="option-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label onClick={() => setTreatment(null)} htmlFor="option-modal" className="btn btn-sm btn-circle bg-slate-700 absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold text-center my-2">{name}</h3>
                    <form onSubmit={onSubmitHandle} className='flex flex-col justify-center items-center space-y-2 mx-auto'>
                        <input type="text" defaultValue={date} disabled className="input input-bordered disabled:bg-gray-300 border-none disabled:text-accent w-full max-w-xs h-10" />

                        <select name='slot' className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, id) => <option
                                    key={id}
                                >{slot}</option>)
                            }
                        </select>

                        <input name='name' type="name" placeholder="Enter your name" className="input input-bordered w-full max-w-xs h-10" />

                        <input name='email' type="email" placeholder="Enter your Email" className="input input-bordered w-full max-w-xs h-10" />

                        <button type="submit" className='bg-primary btn w-full max-w-xs' >Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AppointmentModal;