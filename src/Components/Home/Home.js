import React from 'react';
import Header from './Header/Header';
import Clock from '../../assets/icons/clock.svg'
import Marker from '../../assets/icons/marker.svg'
import Phone from '../../assets/icons/phone.svg'
import Address from './Address/Address';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Services from './Services/Services';
import Hero from './Hero/Hero';
import Hero2 from './Hero2/Hero2';
import Testimonial from './Testimonial/Testimonial';
import ContactUs from './ContactUs/ContactUs';


const Home = () => {

    const AddressData = [
        {
            bg: 'bg-gradient-to-r from-secondary to-primary',
            id: 1,
            img: Clock,
            title: 'Opening Hours',
            text: 'Lorem Ipsum is simply dummy text of the pri'
        },
        {
            bg: 'bg-accent',
            id: 2,
            img: Marker,
            title: 'Visit our location',
            text: 'Brooklyn, NY 10036, United States'
        },
        {
            bg: 'bg-gradient-to-r from-secondary to-primary',
            id: 3,
            img: Phone,
            title: 'Contact us now',
            text: '+000 123 456789'
        },
    ]

    const ServicesData = [
        {
            bg: 'bg-white',
            id: 1,
            img: fluoride,
            title: 'Fluoride Treatment',
            text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            bg: 'bg-white',
            id: 2,
            img: cavity,
            title: 'Cavity Filling',
            text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }, {
            bg: 'bg-white',
            id: 3,
            img: whitening,
            title: 'Teeth Whitening',
            text: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
    ]

    return (
        <>
            <Header />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto mt-5 px-3'>
                {
                    AddressData.map(box => <Address key={box.id} box={box}></Address>)
                }
            </div>
            <div className='text-center container mx-auto mt-32'>
                <h1 className='text-xl uppercase text-primary font-bold'>OUR SERVICES</h1>
                <h1 className='text-3xl text-accent'>Services We Provide</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-[1200px] mx-auto mt-5'>
                    {
                        ServicesData.map(SD => <Services key={SD.id} SD={SD}></Services>)
                    }
                </div>
            </div>
            <Hero />
            <Hero2 />
            <Testimonial />
            <ContactUs />
        </>
    );
};

export default Home;