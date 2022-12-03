import React from 'react';

const AppointmentCart = ({ option, setTreatment }) => {
    const { name, slots, price } = option;
    return (
        <div className="card text-accent p-10 shadow-xl border">
            <div className="text-center space-y-2">
                <h2 className="text-secondary text-xl font-semibold">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p>{slots.length} {slots.length <= 1 ? 'space' : 'spaces'} Available</p>
                <p>Fee: <span className='text-primary'>{price}$</span></p>
                <label
                    onClick={() => setTreatment(option)}
                    disabled={slots.length === 0}
                    htmlFor="option-modal"
                    className="btn bg-gradient-to-r from-secondary to-primary text-white disabled:text-black">Book Appointment</label>
            </div>
        </div>
    );
};

export default AppointmentCart;