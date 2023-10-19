/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";
import useCars from "../../../Hook/useCars";
import { Tabs } from "react-tabs";


const CategoryCar = (params) => {
    const categories = ['Toyota', 'Ford', 'BMW', 'Mercedes-Benz', 'Tesla', 'Honda'];
    const category = params.category;
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const cars = useCars();
    const toyota = cars.filter(item => item.subCategory === 'Toyota');
    const ford = cars.filter(item => item.subCategory === 'Ford');
    const bmw = cars.filter(item => item.subCategory === 'Mercedes-Benz');
    const mercedes = cars.filter(item => item.subCategory === 'BMW');
    const tesla = cars.filter(item => item.subCategory === 'Tesla');
    const honda = cars.filter(item => item.subCategory === 'Honda');
    // console.log(toyota.length, ford.length, bmw.length, mercedes.length, tesla.length, honda.length);

   

    return (
        <div className='py-2 text-xl bg-gradient-to-b from-lime-100 to-red-100 '> 
            
            <h1 className="text-center md:text-3xl text-xl my-4 w-4/12 mx-auto font-bold text-orange-500 uppercase border-y-4 py-4">Explore Our Collection</h1>
            <div className="text-lime-800 font-semibold flex justify-evenly mb-4">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mb-8 gap-2 md:gap-8 md:px-12 p-2 md:py-4'>

         <div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
       <figure><img className='w-[90%]' src='https://i.ibb.co/FhsXdty/toyotabrand.webp' alt="toyota brand" /></figure>
    <div className="card-body">
        <h2 className="card-title">TOYOTA</h2>
        <p> Do You Like It?</p>
        <div className="card-actions justify-end">
            <button className="btn md:btn-md btn-sm text-white font-bold md:text-lg bg-yellow-600 mt-8 btn-error"><Link to='/category/Toyota'><Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>Our Products</Tabs></Link></button>
        </div>
    </div>
</div>
<div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
    <figure><img src='https://i.ibb.co/PZQRXcL/fordbrand.jpg' alt="ford brand" /></figure>
    <div className="card-body">
        <h2 className="card-title">FORD</h2>
        <p> Do You Like It?</p>
        <div className="card-actions justify-end">
        <button className="btn md:btn-md btn-sm text-white font-bold md:text-lg bg-yellow-600 mt-8 btn-error"><Link to='/category/Ford'><Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>Our Products</Tabs></Link></button>
        </div>
    </div>
</div>
<div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
    <figure><img src='https://i.ibb.co/0KwH6Ln/bmwbrand.jpg' alt="bmw brand" /></figure>
    <div className="card-body">
        <h2 className="card-title">BMW</h2>
        <p> Do You Like It?</p>
        <div className="card-actions justify-end">
        <button className="btn md:btn-md btn-sm text-white font-bold md:text-lg bg-yellow-600 mt-8 btn-error"><Link to='/category/Mercedes-Benz'><Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>Our Products</Tabs></Link></button>
        </div>
    </div>
</div>
<div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
    <figure><img src='https://i.ibb.co/Jyg6D99/mercedesbrand.jpg' alt="mercedes brand" /></figure>
    <div className="card-body">
        <h2 className="card-title">MERCEDES-BENZ</h2>
        <p> Do You Like It?</p>
        <div className="card-actions justify-end">
        <button className="btn md:btn-md btn-sm text-white font-bold md:text-lg bg-yellow-600 mt-8 btn-error"><Link to='/category/BMW'><Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>Our Products</Tabs></Link></button>
        </div>
    </div>
</div>
<div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
    <figure><img src='https://i.ibb.co/drYWjHx/teslabrand.webp' alt="mercedes brand" /></figure>
    <div className="card-body">
        <h2 className="card-title">TESLA</h2>
        <p> Do You Like It?</p>
        <div className="card-actions justify-end">
        <button className="btn md:btn-md btn-sm text-white font-bold md:text-lg bg-yellow-600 mt-8 btn-error"><Link to='/category/Tesla'><Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>Our Products</Tabs></Link></button>
        </div>
    </div>
</div>
<div className="card border-4 md:border-amber-600  md:w-[80%] bg-red-500 hover:scale-125 shadow-xl image-full">
    <figure><img src='https://i.ibb.co/wY9TvBQ/hondabrand.jpg' alt="mercedes brand" /></figure>
    <div className="card-body">
        <h2 className="card-title">HONDA</h2>
        <p> Do You Like It?</p>
        <div className="card-actions justify-end">
        <button className="btn md:btn-md btn-sm text-white font-bold md:text-lg bg-yellow-600 mt-8 btn-error"><Link to='/category/Honda'><Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>Our Products</Tabs></Link></button>
        </div>
    </div>
</div>
</div>

            </div>
               
        </div>
    );
};

export default CategoryCar;