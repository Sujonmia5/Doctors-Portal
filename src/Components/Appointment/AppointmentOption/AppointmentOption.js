import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import React, { useEffect, useState } from 'react';
import AppointmentCart from '../AppointmentCart/AppointmentCart';
import AppointmentModal from '../AppointmentModal/AppointmentModal';

const AppointmentOption = ({ selectedDate, setSelectedDate }) => {
    const [appointmentOptionArray, setAppointmentOptionArray] = useState([])
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('AppointmentOption.json')
            .then((response) => response.json())
            .then((data) => setAppointmentOptionArray(data));
    }, [])

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
                <AppointmentModal
                    treatment={treatment}
                    selectedDate={selectedDate}
                    setTreatment={setTreatment}
                />
            }
        </section>
    );
};

export default AppointmentOption;