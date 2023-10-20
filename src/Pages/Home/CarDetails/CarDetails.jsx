// import React from 'react';

import { FaShoppingCart } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useTitle from "../../../Hook/Hook";
import { useEffect, useState } from "react";

const CarDetails = () => {
  useTitle("Car Details");
  // const carDetail = useLoaderData();
  const {id} = useParams();
  const [carDetail, setCarDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://brand-shop-server-ixosafvvp-ateka-sultanas-projects.vercel.app/cars/${id}`)
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



  const handleCart = () =>{
    
  
  }

  return (
    <div>
      <div className="hero min-h-screen bg-base-100">
        <div className="hero-content  rounded-lg flex-col me-8 lg:flex-row">
          <img src={carDetail.picture} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="p-8 border-2 space-y-2 bg-cyan-50 rounded-xl font-serif shadow-red-400 shadow-lg">
            <h1 className="text-5xl text-red-800 font-bold text-center mb-8">{carDetail.name}</h1>
            <p className="py-2 text-amber-700 font-semibold">{carDetail.details}</p>
            <p className="py-2  font-semibold">Brand: <span className="text-red-700">{carDetail.name}</span></p>
            <p className="py-2  font-semibold">Price: <span className="text-red-700">$ {carDetail.price}</span></p>
            <p className="py-2  font-semibold">Quantity: <span className="text-red-700">{carDetail.quantity}</span></p>
            <p className="py-2  font-semibold">Rating:  <span className="text-red-700">{carDetail.rating}</span></p>
            
          <div className="mt-6 flex justify-center"><button onClick={()=>handleCart(carDetail)}  className="btn btn-error gap-4"><FaShoppingCart className="flex"></FaShoppingCart>Add to Cart</button></div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;