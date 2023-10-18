import { Outlet } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Outlet></Outlet>

            <div className="hero my-4 bg-base-200 border-4 ">
                <div className="hero-content flex-col lg:flex-row gap-10">
                    <div className="md:w-[50%] md:ps-8 mx-auto md:pe-8"><img src="https://i.ibb.co/02x8J9K/car.jpg" className="w-[90%] max-h-[50%] rounded-lg shadow-2xl photo" /></div>
                    <div className=" md:w-[60%] w-[80%]">
                        <h1 className="md:px-6 text-center text-xl md:text-4xl text-orange-600 font-serif font-bold uppercase">Our goal is to help YOU!</h1>
                        <div className="md:p-6 text-center text-amber-800 font-semibold md:text-lg space-y-4">
                        <p >Our cars kindle imagination, spark adventures, and offer hours of thrilling joy.</p>
                        </div>
                        
                    </div>
                </div>
            </div>

           
        </div>
    );
};

export default Home;