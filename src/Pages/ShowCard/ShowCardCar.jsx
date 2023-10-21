/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react';
import { Link, useLoaderData, useParams } from "react-router-dom";
import { Tabs } from "react-tabs";
import CategoryCar from "../Home/CategoryCar/CategoryCar";
import TabCar from "../Shared/Navbar/TabCar";
import { useState } from "react";
import Advertisement from "./Advertisement";

const ShowCardCar = () => {
    
    const categoryCars = useLoaderData();
    const params = useParams();
    const [cars, setCars] = useState(categoryCars);
     
    if (!categoryCars || !Array.isArray(categoryCars)) {
        return (
            <div>
                <p>No Products available in this category</p>
            </div>
        );
    }
    console.log(categoryCars);


    return (
        <div>
        <Advertisement></Advertisement>
        <h1 className="text-3xl text-[gray] text-center mt-10 mb-5">
        <strong>Displaying products for brand</strong>
        </h1>
        <hr />
        <div className="py-8">
            <div className="mb-5">
        </div>
           <div hidden> <CategoryCar key={params} params={params} categoryCars={categoryCars}></CategoryCar></div>
            <Tabs className="border-0 rounded-lg shadow-2xl">

                <div style={{  gridTemplateColumns: '1fr 1fr 1fr' }}  className=" mx-auto md:grid">
                    {
                        categoryCars.map(categoryCar =>
                            <TabCar key={categoryCar._id} 
                            categoryCar={categoryCar}
                            cars={cars}
                            setCars={setCars}
                            ></TabCar>

                        )}
                        

                </div>
            </Tabs>
        </div>
        </div>
        
    );
};

export default ShowCardCar;