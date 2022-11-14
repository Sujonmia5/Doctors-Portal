import { createBrowserRouter } from "react-router-dom";
import Appointment from "../Components/Appointment/Appointment";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
import Main from "../Layout/Main";

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
            }
        ]
    }
])

export default router