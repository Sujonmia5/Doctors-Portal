import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';

const MyAppointment = () => {
    const { user } = useContext(AuthContext)

    const { data: bookingList = [], isLoading } = useQuery({
        queryKey: ['Dashboard', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5500/bookings?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            console.log(data);
            return data
        }
    })
    // console.log(bookingList);
    return (
        <div>
            {
                bookingList.length ? <>
                    <h1 className='text-accent text-xl font-bold font-serif text-center mt-5'>My Appointment</h1>

                    <div className="overflow-x-auto mt-5 mx-2 md:mx-5">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>S.N</th>
                                    <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Name</th>
                                    <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Treatment</th>
                                    <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Favorite Color</th>
                                    <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Time</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    bookingList.map((booking, i) => <tr key={booking._id} >
                                        <th>{i + 1}</th>
                                        <td>{booking.patient}</td>
                                        <td>{booking.treatment}</td>
                                        <td>{booking.date}</td>
                                        <td>{booking.slot}</td>
                                    </tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </> : <>
                    <div className='flex h-[80vh] justify-center items-center flex-col'>
                        <h1 className='block text-3xl font-bold font-serif'>No Appointment Booking</h1>
                        <Link className='text text-5xl text-primary font-bold font-serif' to='/appointment'>Go To Appointment And Booking</Link>
                    </div>
                </>
            }
        </div>
    );
};

export default MyAppointment;