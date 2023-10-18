import { useContext } from "react";
import logo from '/logo.png';
import './Navbar.css';
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
            .then()
            .catch((err) => {
                console.log(err);
                toast('You are successfully logged out')
            });
    };
    const userLogin = user;
    //  const userLogin = JSON.parse(localStorage.getItem('user'));
    //  const {displayName, photoURL} = userLogin;
    console.log(userLogin);
    
    return (
        <div>

            <div className=''>
                <div  className="navbar  d-flex justify-between space-x-6  text-xl rounded-lg">

                    <div className="navbar-start  w-[90%]">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-300 rounded-box w-52">
                                <li className='font-semibold font-serif '><Link to='/'>Home</Link></li>
                                <li className='font-semibold font-serif '><Link to='/allcars'>All Cars</Link></li>
                                <li className='font-semibold font-serif '><Link to='/addcar'>Add Car</Link></li>
                                {user?.email ? (<>

                                    <li className='font-semibold font-serif '><Link to={`/mycar/${user.email}`}>My Car</Link></li>
                                    <li className='font-semibold font-serif '><Link onClick={handleLogout}>Logout</Link></li>
                                </>
                                ) : (
                                    <li className='font-semibold font-serif '><Link to="/login">Login</Link></li>
                                )}
                            </ul>

                        </div>
                        <div className='lg:w-[70%] md:w-[89%] ms-4 flex justify-between gap-0' >
                            <div><img className='align-center w-[60%] md:w-[50%] md:mt-1 rounded-xl border-2 border-red-200 shadow-lg' src={logo} /></div>
                            <div className='font-sans pt-2 w-[120%] md:w-full'><h4 className='car py-3 md:text-4xl text-3xl'>Auto Motive</h4>
                            </div>
                        </div>
                    </div>
                    <div className="navbar-center  space-x-8 hidden lg:flex">
                        <ul className="menu mx-auto  font-semibold font-serif menu-horizontal space-x-8 px-1">
                            <li className=''><Link to='/'>Home</Link></li>
                            <li className=''><Link to='/allcars'>All Cars</Link></li>
                            <li className=''><Link to='/addcar'>Add Car</Link></li>
                           
                        </ul>

                        {user?.email ? (
                            <div className='space-x-8'>
                                <Link to={`/mycar/${user.email}`}><button className=' font-semibold font-serif '>My Car</button></Link>
                                <button className=" font-serif text-red-500 font-bold rounded-2xl  mx-2" onClick={handleLogout} >Logout</button>
                            </div>
                        ) : (
                            <Link to="/login">
                                <button className="text-xl font-semibold font-serif  rounded-2xl text-lime-700  me-8 btn-red-outline" >Login</button>
                            </Link>
                        )}

                    </div>
                    {user?.email && user?.displayName ? (
                        <div style={{ hover: { backgroundColor: 'red' } }} className="navbar-end w-[10%]  ">
                             <p>{userLogin.displayName}</p>
                            <img src={user.photoURL} className='border-2  rounded-full ms-4 w-[60px] h-[60px]' />
                        </div>
                    ) : <></>
                    }
                </div>
            </div>

            <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <ToastContainer />
        </div>
    );
};


export default Navbar;