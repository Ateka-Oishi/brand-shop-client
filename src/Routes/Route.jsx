import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MainLayout from "../layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import AddCar from "../Pages/Home/AddCar/AddCar";
import UpdateCar from "../Pages/Home/UpdateCar/UpdateCar";
import MyCar from "../Pages/Home/MyCar/MyCar";
import ShowCardCar from "../Pages/ShowCard/ShowCardCar";
import AllCars from "../Pages/Home/AllCars/AllCars";
import CarDetails from "../Pages/Home/CarDetails/CarDetails";
import PrivateRoute from "./PrivateRoute";



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
            },
            {
                path: '/addcar',
                element: <PrivateRoute><AddCar></AddCar></PrivateRoute>
            },
            {
                path: '/updatecar/:id',
                element: <UpdateCar></UpdateCar>,
                loader: ({ params }) => fetch(`http://localhost:5000/updatecar/${params.id}`)
            },
            {
                path: '/mycar/:id',
                element: <PrivateRoute><MyCar></MyCar></PrivateRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/mycars/${params.id}`)
                
            },
            {
                path: '/allcars',
                element: <PrivateRoute><AllCars></AllCars></PrivateRoute>,
                loader: () => fetch(`http://localhost:5000/cars`)
            },
            {
                path: '/allcars/:id',
                element: <CarDetails></CarDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/cars/${params.id}`)
            },
            
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
            },
            {
                path: '/category/:category',
                element: <ShowCardCar></ShowCardCar>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.category}`)
            }
        ]
    }

])

export default router;