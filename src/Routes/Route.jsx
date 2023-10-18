import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home/Home";



const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Navigate to='/home'></Navigate>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            }
        ]    
    },
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/home',
                element: <Home></Home>
            }
        ]
    }

])

export default router;