import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';
import SmallSpinner from '../../Shared/SmallSpinner';

const Login = () => {
    const [spin, setSpin] = useState(false)
    const { loginUser } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const Navigate = useNavigate()
    const [userEmail, setUserEmail] = useState('')

    const [token] = useToken(userEmail)

    if (token) {
        setSpin(false)
        Swal.fire('LogIn Successful', '', 'success')
        Navigate(from, { replace: true })
    }

    const handleLogin = (data) => {
        setSpin(true)
        console.log(data);
        loginUser(data.email, data.password)
            .then(result => {
                setUserEmail(result.user.email)
            })
            .catch(err => {
                setSpin(false)
                console.log(err);
            })
    }
    return (
        <div className='h-[700px] flex justify-center text-accent items-center'>
            <div className='w-96 items-center shadow-xl p-6'>
                <h1 className='font-bold text-xl text-center'>Log in</h1>
                <form className='my-5 items-center space-y-3' onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="">Email</span></label>
                        <input {...register('email', { required: "Please validated email" })} type="email" placeholder="Enter your Email" className="input input-accent border h-10 w-full max-w-xs" />
                        {errors.email && <p role="alert" className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="">Password</span></label>
                        <input
                            {...register('password',
                                {
                                    required: 'please give me password',
                                    minLength: { value: 6, message: 'Password must be 6 Character' }
                                })}
                            type="password" placeholder="Enter your password" className="input input-accent border h-10 w-full max-w-xs" />
                        {errors.password && <p role="alert" className='text-red-600'>{errors.password?.message}</p>}
                        <label className="mt-1"><Link to='' className='text-accent hover:text-blue-600'>Forget password</Link></label>
                    </div>
                    <button className='btn w-full btn-accent text-base text-white' type="submit" >
                        {
                            spin ? <SmallSpinner /> : 'Login'
                        }
                    </button>
                    <div className='text-center'>
                        <p className='text-sm'>New to Doctors Portal? <Link className='text-secondary' to='/register'>Create new account</Link></p>
                    </div>
                    <div className="divider">OR</div>
                    <div className='flex items-center justify-center '>
                        <input type="button" className='w-full btn btn-outline hover:bg-white hover:text-accent text-accent text-sm' value='CONTINUE WITH GOOGLE' />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;