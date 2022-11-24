import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const logoutHandle = () => {
        logOut().then(() => { }).catch(() => { })
    }
    const menu = <React.Fragment>
        <li className='rounded mr-2 hover:bg-accent transform duration-1000'><Link className='text-black p-1 font-medium px-2' to='/home'>Home</Link></li>

        <li className='rounded mr-2 hover:bg-accent transform duration-1000'><Link className='text-black p-1 font-medium px-2' to='/appointment'>Appointment</Link></li>

        <li className='rounded mr-2 hover:bg-accent transform duration-1000'><Link className='text-black p-1 font-medium px-2' to='/about'>About</Link></li>

        <li className='rounded mr-2 hover:bg-accent transform duration-1000'><Link className='text-black p-1 font-medium px-2' to='/contact'>Contact Us</Link></li>

        {
            user?.uid ? <>
                <li className='rounded mr-2 hover:bg-accent transform duration-1000'><Link className='text-black p-1 font-medium px-2' to='/dashboard'>Dashboard</Link></li>
                <li className='rounded mr-2 hover:bg-accent transform duration-1000'><Link className='text-black p-1 font-medium px-2' to='/' onClick={logoutHandle}>Log Out</Link></li>
            </> : <li className='rounded mr-2 hover:bg-accent transform duration-1000'><Link className='text-black p-1 font-medium px-2' to='/login'>Login</Link></li>
        }
    </React.Fragment>

    return (
        <div className="navbar bg-white flex justify-between md:justify-around shadow-lg rounded lg:w-[1440px] mx-auto">
            <div className="navbar-start pl-0">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-black lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menu}
                    </ul>
                </div>
                <a href='/' className="btn btn-ghost normal-case lg:ml-14 text-black text-xl">Doctors Portal</a>
            </div>
            <div className="navbar-center hidden lg:flex justify-end">
                <ul className="menu menu-horizontal p-0">
                    {menu}
                </ul>
            </div>
            <label htmlFor='Dashboard-drawer' tabIndex={2} className="btn btn-ghost text-end text-black lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
        </div >
    );
};

export default Navbar;