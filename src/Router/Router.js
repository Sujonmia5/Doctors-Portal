import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Appointment/Appointment";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./Private/PrivateRoute";
import DashboardLayout from '../Layout/DashboardLayout'
import MyAppointment from "../Components/Dashboard/MyAppointment/MyAppointment";
import AllUsers from "../Components/Dashboard/AllUsers/AllUsers";
import AdminRoute from "./Private/AdminRoute";
import AddDoctor from "../Components/Dashboard/AddDoctor/AddDoctor";
import ManageDoctor from "../Components/Dashboard/ManageDoctor/ManageDoctor";

const router = createBrowserRouter([
    {
        path: '/', element: <Main />,
        children: [
            {
                path: '/', element: <Home />
            },
            {
                path: '/home', element: <Home />
            },
            {
                path: '/appointment', element: <Appointment />
            },
            {
                path: '/login', element: <Login />
            },
            {
                path: '/register', element: <Register />
            }
        ]
    },
    {
        path: '/dashboard', element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard', element: <MyAppointment />
            },
            {
                path: '/dashboard/users', element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/addDoctor', element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: '/dashboard/doctorList', element: <AdminRoute><ManageDoctor /></AdminRoute>
            }
        ]
    }
])

export default router