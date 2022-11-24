import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import SmallSpinner from '../../../Shared/SmallSpinner';
import DoctorModal from './DoctorModal/DoctorModal';

const ManageDoctor = () => {
    const [modal, setModal] = useState(null)
    const { data: doctorLists = [], isLoading, refetch } = useQuery({
        queryKey: ['DoctorList'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5500/dashboard/doctorlist', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json()
            return data
        }
    })
    if (isLoading) {
        return <SmallSpinner></SmallSpinner>
    }

    const doctorDeletedHandler = doctor => {
        fetch(`http://localhost:5500/dashboard/doctorlist/${doctor._id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('deleted successful')
                    refetch()
                }
            })
    }

    return (
        <>
            <h1 className='text-accent text-3xl text-center mt-5 font-bold font-serif underline'>Doctor List</h1>
            <div className="overflow-x-auto mt-5 mx-2 md:mx-5">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>No</th>
                            <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Photo</th>
                            <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Name</th>
                            <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Email</th>
                            <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Specialties</th>
                            <th className='text-accent bg-gray-400 text-base font-serif border-r-2 text-center'>Deleted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctorLists.map((doctor, i) => <tr key={doctor._id}>
                                <th className='p-2 pl-8'>{i + 1}</th>
                                <td className='p-2 pl-8'>
                                    <div className="avatar">
                                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                            <img src={doctor.photoURL} alt='' />
                                        </div>
                                    </div>
                                </td>
                                <td className='p-2 pl-8'>{doctor.name}</td>
                                <td className='p-2 pl-8'>{doctor.email}</td>
                                <td className='p-2 pl-8'>{doctor.specialty}</td>
                                <td className='p-2 pl-8'>
                                    <label onClick={() => setModal(doctor)} htmlFor="my-modal-6" className='btn btn-sm btn-outline btn-error'>Deleted</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                modal &&
                <DoctorModal
                    title={`Are you sure deleting the Doctors`}
                    message={`if you deleting doctor. then click confirm button`}
                    setModal={setModal}
                    modal={modal}
                    doctorDeletedHandler={doctorDeletedHandler}
                >

                </DoctorModal>
            }
        </>
    );
};

export default ManageDoctor;