// import React from 'react';
import { Link } from 'react-router-dom';
import errorImage from '/error.png'
import { FaArrowLeft } from 'react-icons/fa';
import useTitle from '../../Hook/Hook';
const ErrorPage = () => {
    useTitle("Error");
    return (
        <div className='h-[90%] flex justify-center '>
            <img className=' relative ' src={errorImage}/>
            <p className='absolute md:text-4xl font-bold text-white top-5 text-center'>Page Not Found</p>
            <div className='absolute flex justify-center  top-20 '> 
            <Link to='/'><button className="btn btn-error  btn-xs sm:btn-sm md:btn-md lg:btn-lg"><FaArrowLeft></FaArrowLeft>  Back to Home</button></Link>
            </div>
            
        </div>
    );
};

export default ErrorPage;