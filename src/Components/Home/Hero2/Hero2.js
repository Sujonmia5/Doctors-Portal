import React from 'react';
import Doctor from '../../../assets/images/doctor-small.png'

const Hero2 = () => {
    return (
        <section className='bg-appointment'>
            <div className="hero h-[533px] relative">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={Doctor} className="lg:w-1/2 hidden md:block rounded-lg shadow-xl -mt-20" alt='' />
                    <div className='lg:w-1/2 sm:px-24 text-white'>
                        <h1><small className='font-bold text-xl text-primary'>Appointment</small></h1>
                        <h1 className="text-4xl font-semibold"><small>Make an appointment Today</small></h1>
                        <p className="pt-3 pb-5 text-justify"><small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</small></p>
                        <button className="btn bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero2;