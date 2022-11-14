import React from 'react';
import Quote from '../../../assets/icons/quote.svg'
import People1 from '../../../assets/images/people1.png'
import People2 from '../../../assets/images/people2.png'
import People3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {
    const Reviews = [
        {
            id: 1,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            img: People1,
            address: 'California'
        },
        {
            id: 2,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            img: People2,
            address: 'California'
        },
        {
            id: 3,
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            name: 'Winson Herry',
            img: People3,
            address: 'California'
        },
    ]
    return (
        <section className='max-w-screen-xl mx-auto mt-20 mb-36'>
            <div className='flex justify-between items-center px-2'>
                <div>
                    <h1 className='text-xl text-primary font-bold'><small>Testimonial</small></h1>
                    <h1 className='text-3xl text-accent'>What Our Patients Says</h1>
                </div>
                <img className='w-32 sm:w-48' src={Quote} alt="" />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-[1300px] mx-auto mt-5 p-3'>
                {
                    Reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;