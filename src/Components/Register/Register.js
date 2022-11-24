import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { AuthContext } from '../../Context/AuthProvider';
import SmallSpinner from '../../Shared/SmallSpinner';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../Hooks/useToken';

const Register = () => {
    const [spin, setSpin] = useState(false)
    const { createUser, updateUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [createUserEmail, setCreateUserEmail] = useState('')
    const [token] = useToken(createUserEmail)
    const Navigate = useNavigate()

    if (token) {
        Navigate(from, { replace: true })
    }
    const notify = () => {
        toast.success('🦄 Account create successful', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }
    const handleRegister = data => {
        setSpin(true)
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                updateUser(data.name)
                    .then(() => {
                        userDataSave(data.name, data.email)
                        notify()
                    })
                    .catch(() => { setSpin(false) })
            })
            .catch(err => {
                setSpin(false)
                console.log(err)
            })
    }

    const userDataSave = (name, email) => {
        const user = { name, email }
        fetch(`http://localhost:5500/users`, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                setCreateUserEmail(email)
                setSpin(false)
            })
    }

    return (
        <div className='h-[700px] flex justify-center text-accent items-center'>
            <div className='w-96 items-center shadow-xl p-6'>
                <h1 className='font-bold text-xl text-center'>Log in</h1>
                <form className='my-5 items-center space-y-3' onSubmit={handleSubmit(handleRegister)}>
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
                        <label className="label"><span className="">Password</span></label>
                        <input
                            {...register('password',
                                // {
                                //     pattern: {
                                //         value: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z]).{6,}$/, message: 'Password must be Strong. (Ex: 12@#sA)'
                                //     }
                                // },
                                {
                                    required: 'Required Password',
                                    minLength: { value: 6, message: 'Password length minimum 6 Character' },

                                })}
                            type="password" placeholder="Enter your password" className="input input-accent border h-10 w-full max-w-xs" />
                        {
                            errors.password && <p className='text-red-600'>{errors.password?.message}</p>
                        }
                    </div>
                    <button className='btn w-full btn-accent text-base text-white' type="submit" >
                        {
                            spin ? <SmallSpinner /> : 'Submit'
                        }
                    </button>

                    <div className='text-center'>
                        <p className='text-sm'>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                    </div>
                    <div className="divider">OR</div>
                    <div className='flex items-center justify-center '>
                        <input type="button" className='w-full btn btn-outline hover:bg-white hover:text-accent text-accent text-sm' value='CONTINUE WITH GOOGLE' />
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;