// import React from 'react';
import { useLoaderData, useParams } from "react-router-dom";
import { Tabs } from "react-tabs";
import CategoryCar from "../Home/CategoryCar/CategoryCar";
import TabCar from "../Shared/Navbar/TabCar";

const ShowCardCar = () => {
    const categoryCars = useLoaderData();
    const params = useParams();
     
    if (!categoryCars || !Array.isArray(categoryCars)) {
        return (
            <div>
                <p>No Products available in this category.</p>
            </div>
        );
    }
    console.log(categoryCars);


    return (
        <div className="py-8">

           <div hidden> <CategoryCar key={params} params={params} categoryCars={categoryCars}></CategoryCar></div>
            <Tabs className="border-0 rounded-lg shadow-2xl">

                <div style={{  gridTemplateColumns: '1fr 1fr 1fr' }} className=" mx-auto md:grid">
                    {
                        categoryCars.map(categoryCar =>
                            <TabCar key={categoryCar._id} categoryCar={categoryCar} ></TabCar>

                        )}

                </div>
            </Tabs>
        </div>
    );
};

export default ShowCardCar;