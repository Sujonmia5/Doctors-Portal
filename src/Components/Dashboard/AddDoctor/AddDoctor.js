import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SmallSpinner from '../../../Shared/SmallSpinner';

const AddDoctor = () => {
    const [spin, setSpin] = useState(false)
    const [addedDoctor, setAddedDoctor] = useState(null)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const Navigate = useNavigate()

    if (addedDoctor) {
        setSpin(false)
        toast.success('Doctor Added successfully')
        Navigate('/dashboard/doctorList')
    }

    const { data: Specialties = [], isLoading } = useQuery({
        queryKey: ['Specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5500/appointment/specialty', {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <SmallSpinner></SmallSpinner>
    }
    const doctorHandler = (data) => {
        setSpin(true)
        const formData = new FormData()
        formData.append('image', data.file[0])
        const imgKey = process.env.REACT_APP_imgKey

        fetch(`https://api.imgbb.com/1/upload?key=${imgKey}`, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const doctorData = {
                    name: data.name,
                    email: data.email,
                    photoURL: result.data.url,
                    specialty: data.specialty
                }
                // console.log(doctorData);

                fetch('http://localhost:5500/dashboard/doctorlist', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body: JSON.stringify(doctorData)
                })
                    .then(res => res.json())
                    .then(data1 => {
                        if (data1.acknowledged) {
                            setAddedDoctor(data1.acknowledged)
                        }

                    })
            })
    }


    return (
        <>
            <h1 className='text-accent text-center mt-10 text-3xl font-semibold '>Add A New Doctor</h1>
            <div className='w-full flex justify-center items-center'>
                <form className='my-5 w-[540px] flex flex-col rounded-lg h-[600px] justify-center  bg-white shadow-lg items-center space-y-3' onSubmit={handleSubmit(doctorHandler)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="">Name</span></label>
                        <input
                            {...register('name', { required: 'Please Enter your Name' })}
                            type="text" placeholder="Enter your Name" className="input input-accent border h-10 w-full max-w-xs" />
                        {
                            errors.name && <p className='text-red-600'>{errors.name?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="">Email</span></label>
                        <input
                            {...register('email', { required: 'Email Required' })}
                            type="email" placeholder="Enter your Email" className="input input-accent border h-10 w-full max-w-xs" />
                        {
                            errors.email && <p className='text-red-600'>{errors.email?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="">Select your Specialty</span></label>
                        <select {...register('specialty', { required: 'Specialty Required' })} className="select w-full input-accent border max-w-xs">
                            {
                                Specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                            }

                        </select>
                        {
                            errors.specialty && <p className='text-red-600'>{errors.specialty?.message}</p>
                        }
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="">Image</span></label>
                        <input
                            {...register('file', { required: 'File Required' })}
                            type="file" className="file-input file-input-bordered input-accent w-full max-w-xs" />
                        {
                            errors.file && <p className='text-red-600'>{errors.file?.message}</p>
                        }
                    </div>
                    <button className='btn w-3/4 btn-accent text-base text-white' type="submit" >
                        {
                            spin ? <SmallSpinner /> : 'ADD DOCTOR'
                        }
                    </button>
                </form>
            </div>
        </>
    );
};

export default AddDoctor;