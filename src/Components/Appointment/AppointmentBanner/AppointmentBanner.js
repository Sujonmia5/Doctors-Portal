import { format } from 'date-fns/esm';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import Chair from '../../../assets/images/chair.png'

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {

    console.log(selectedDate);
    return (
        <header className='text-accent'>
            <div className="hero bg-hero mx-auto md:mt-20">
                <div className="hero-content flex-col justify-around lg:flex-row-reverse">
                    <div>
                        <img src={Chair} className="rounded-lg max-w-sm shadow-2xl" alt='' />
                    </div>
                    <div className='text-accent'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;