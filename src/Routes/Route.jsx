import { createBrowserRouter } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout/LoginLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage"



const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginLayout></LoginLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                
            }
        ]    
    }
])

export default router;