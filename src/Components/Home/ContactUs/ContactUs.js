import React from 'react';

const ContactUs = () => {
    return (
        <section className='bg-appointment flex flex-col  justify-center py-10'>
            <form className='text-center flex flex-col mx-auto'>
                <div className='my-5'>
                    <h1 className='text-xl font-bold text-secondary'><small>Contact Us</small></h1>
                    <p className='text-white text-3xl'>Stay connected with us</p>
                </div>
                <input type="email" placeholder="Enter your Email" className="input input-sm sm:w-[450px] h-12 mb-2" />
                <input type="text" placeholder="Enter your Subject" className="input input-sm sm:w-[450px] h-12 mb-2" />
                <textarea rows={5} className="input input-lg my-3"></textarea>
                <div>
                    <button className="btn bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </form>
        </section>
    );
};

export default ContactUs;