import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useState } from 'react';
import PrivateRoute from '../../../Router/Private/PrivateRoute';
import AppointmentCart from '../AppointmentCart/AppointmentCart';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const AppointmentOption = ({ selectedDate, setSelectedDate }) => {
    const date = format(selectedDate, 'PP')
    const [treatment, setTreatment] = useState(null);

    const { data: appointmentOptionArray = [], refetch } = useQuery({
        queryKey: ['Doctor-Portal',selectedDate],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5500/appointment/option?date=${date}`,{
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await response.json();
            return data;
        }
    })

    return (
        <section>
            <div className='text-center my-10'>
                <p className='text-secondary text-xl'>Available Appointments on {selectedDate && format(selectedDate, 'PP')}</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:w-[1300px] mx-auto mt-5 p-3'>
                {
                    appointmentOptionArray.map(option => <AppointmentCart
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                        setSelectedDate={setSelectedDate}
                    >
                    </AppointmentCart>)
                }
            </div>
            {
                treatment &&
                <PrivateRoute><AppointmentModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                    refetch={refetch}
                /></PrivateRoute>
            }
        </section>
    );
};

export default AppointmentOption;