import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar'
import { AuthContext } from '../Context/AuthProvider';
import useAdmin from '../Hooks/useAdmin';

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user.email)
    return (
        <div className='text-accent'>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="Dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content bg-gray-200">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="Dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 pr-0 w-80 bg-base-100 text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard' className='text-accent focus:bg-gray-200 rounded-r-none '>My Appointment</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/users' className='text-accent focus:bg-gray-200'>All Users</Link></li>
                                <li><Link to='/dashboard/addDoctor' className='text-accent focus:bg-gray-200'>Add A Doctor</Link></li>
                                <li><Link to='/dashboard/doctorList' className='text-accent focus:bg-gray-200'>Manage Doctor</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;