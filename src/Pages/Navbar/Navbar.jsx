import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [theme, setTheme] = useState(null);
        

    useEffect(() => {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    }, []);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);
   

    return (
    <div>
        <div>
            <div className="navbar  d-flex justify-between space-x-6  text-xl rounded-lg">
                <div className="navbar-start w-[90%]">
                    <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52">
                                <li className='font-semibold font-serif '><Link to='/'>Home</Link></li>
                                <li className='font-semibold font-serif '><Link to='/allCars'>All Cars</Link></li>
                                <li className='font-semibold font-serif '><Link to='/addCar'>Add Car</Link></li>
                                 (<>
                                    <li className='font-semibold font-serif '>My Cars</li>
                                    <li className='font-semibold font-serif '>Logout</li>
                                </>
                                
                                    <li className='font-semibold font-serif '><Link to="/login">Login</Link></li>
                                )
                            </ul>
                    </div>

                </div>

            </div>
        </div>

        
    </div>
       
    );
};

export default Navbar;