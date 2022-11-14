import React from 'react';
import Chair from '../../../assets/images/chair.png'

const Header = () => {
    return (
        <div className="hero bg-hero pb-28 pt-16 mx-auto md:mt-20">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div>
                    <img src={Chair} className="rounded-lg w-full shadow-2xl" alt='' />
                </div>
                <div className='text-accent'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;