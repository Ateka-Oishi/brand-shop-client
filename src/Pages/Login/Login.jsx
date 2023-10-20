import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { useContext, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import app from '../../Firebase/firebase.config';
import { AuthContext } from '../../Providers/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from '../../Hook/Hook';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const { loginUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';
    useTitle("Login");

    console.log(user);
    localStorage.setItem('user', JSON.stringify(user));

    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                toast.success("Login Successful!")
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error.message);
                toast.error("Login Failed")
            })

          

    }
    const handleGoogleSignIn = () => {

        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setUser(loggedInUser)
                // console.log(loggedInUser);
                localStorage.setItem('user', loggedInUser);
                toast.success("Login Successful!");
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error ', error.message)
                toast.error("Login Failed")
            })
    }



    return (
        <div className="bg-gradient-to-b to-slate-400 from-cyan-100">
                       
        <div className="hero ">
            <div className="hero-content flex-col  space-y-4">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <form onSubmit={handleLogin}>
                    <div className="card w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" name="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </div>

                    </div>
                </form>
                <div className="w-56  border-2">
                    <img
                        onClick={handleGoogleSignIn}
                        className=" social-button"
                        src="https://i.ibb.co/gSTHXZJ/google-btn.png"
                        alt=""
                    />
                </div>
                <label className="label">
                    <span className="label-text text-white text-xl">Do not have an account? <Link to='/register'>
                        <span className="font-bold text-xl text-blue-800">Register</span></Link></span>
                </label>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={1000}
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
        </div >
    </div>
    );
};

export default Login;