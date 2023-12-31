// import React from 'react';

import { FaShoppingCart } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import useTitle from "../../../Hook/Hook";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";

const CarDetails = () => {
  useTitle("Car Details");

  const {user} = useContext(AuthContext)
  const car = useLoaderData();

  const {id} = useParams();
  const [carDetail, setCarDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://brand-shop-server-ixosafvvp-ateka-sultanas-projects.vercel.app/cars/${id}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      
    })
      .then((res) => res.json())
      .then((data) => {
        setCarDetail(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [id]);

 

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (!carDetail) {
    return <div>Car not found.</div>;
  }
  const handleCart = ()=>{
    user(car);
     fetch(`https://brand-shop-server-ixosafvvp-ateka-sultanas-projects.vercel.app/mycar?email=${user.email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(carDetail), // Send the product details
    })
      .then((res) => res.json())
      .then((data) => {
        setCarDetail(data);
      })
      .catch((error) => {
        setError(error);
     });

  }



  

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content  rounded-lg flex-col me-8 lg:flex-row">
          <img src={carDetail.picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="p-8 border-2 space-y-2 bg-cyan-50 rounded-xl font-serif shadow-red-400 shadow-lg">
            <h1 className="text-5xl text-red-800 font-bold text-center mb-8">Brand: {carDetail.brandName}</h1>
            <p className="py-2  font-semibold"><span className="text-amber-700">Details:</span> {carDetail.details}</p>
            <p className="py-2  font-semibold"><span className="text-red-700">Product Name:</span> {carDetail.name}</p>
            <p className="py-2  font-semibold"><span className="text-red-700">Price:</span> ${carDetail.price}</p>
            <p className="py-2  font-semibold"><span className="text-red-700">Quantity: </span>{carDetail.quantity}</p>
            <p className="py-2  font-semibold"><span className="text-red-700">Rating: </span>{carDetail.rating}</p>
            
          <div className="mt-6 flex justify-center"><Link to={`/mycar/:email`}><button onClick={()=>handleCart(user?.email)}  className="btn btn-error gap-4"><FaShoppingCart className="flex"></FaShoppingCart>Add to Cart</button></Link></div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;