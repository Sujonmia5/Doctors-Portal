import React, { useState } from 'react';
import AppointmentBanner from './AppointmentBanner/AppointmentBanner';
import AppointmentOption from './AppointmentOption/AppointmentOption';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())
    return (
        <div>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AppointmentOption
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />

        </div>
    );
};

export default Appointment;