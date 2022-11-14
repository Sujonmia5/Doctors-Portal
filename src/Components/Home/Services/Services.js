import React from 'react';

const Services = ({ SD }) => {

    const { img, text, title, bg } = SD
    return (
        <div className={`card sm:w-96 mx-auto shadow-xl ${bg} text-accent`}>
            <figure><img className='w-[116px] h-[116px]' src={img} alt="" /></figure>
            <div className="card-body flex flex-col justify-center">
                <h2 className="font-semibold text-xl">{title}</h2>
                <p className='text-base'>{text}</p>
            </div>
        </div>
    );
};

export default Services;