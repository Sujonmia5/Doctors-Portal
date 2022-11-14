import React from 'react';

const Address = ({ box }) => {
    const { img, text, title, bg } = box
    return (
        <div className={`card card-side px-6 justify-center items-center text-white shadow-xl ${bg}`}>
            <img className='w-20 h-20' src={img} alt="" />
            <div className="card-body pr-0">
                <h2 className="card-title text-xl font-bold">{title}</h2>
                <p className='text-base'>{text}</p>
            </div>
        </div>
    );
};

export default Address;