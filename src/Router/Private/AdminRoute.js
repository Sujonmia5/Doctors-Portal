import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useAdmin from '../../Hooks/useAdmin';
import Spinner from '../../Shared/Spinner';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email)
    console.log(isAdmin);

    const location = useLocation()

    if (loading || isAdminLoading) {
        return <Spinner></Spinner>
    }

    if (user && isAdmin) {
        return children
    }

    return <Navigate to='/login' state={{ from: location }}></Navigate>
};

export default AdminRoute;