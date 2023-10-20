/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



  const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (user) {
      return children;
    }
    if(loading){
      return <span className="loading loading-spinner loading-lg"></span>
  }
  
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
  };
  
  export default PrivateRoute;
