import { Link, useLocation, useNavigate } from "react-router-dom";
import useTitle from "../../Hook/Hook";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const { registerUser, updateUserProfile } = useContext(AuthContext);
  useTitle("Register");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const handleRegistration = async(e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    console.log(name, email, password, photoURL);
    if(password.length<6){
          toast.error('Password must be 6 characters long');
    }
    if (!/[A-Z]/.test(password)) {
      toast.error('Password must contain at least one capital letter');
      return; 
    }
  
    if (!/[^A-Za-z0-9]/.test(password)) {
      toast.error('Password must contain at least one special character');
      return;
    }
    try{
        const result = await registerUser(email, password);
        const createUser = result.user;
        console.log(createUser);
        //update user profile
        await updateUserProfile(name, photoURL);
        toast.success('You are successfully registered');
        navigate(from, { replace: true });
    }
    catch (error) {
        console.log(error.message);
        toast.error('Registration failed')
    }
    
    // registerUser(email, password)
    //   .then(result => {
    //     const createdUser = result.user;
    //     updateUserProfile(result.name, result.photoURL)
    //     console.log(createdUser);
    //     toast('You are successfully registered');
    //     navigate(from, { replace: true });
    //   })
    //   .catch(error => {
    //     console.log(error.message);
    //     toast(error.message);
    //   })
    // console.log(registerUser);
  };
 

  return (
    <div className="hero min-h-screen bg-gradient-to-b to-slate-800 from-cyan-400">
     
      <div className="hero-content flex-col space-y-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        {/* <form> */}
        <form onSubmit={handleRegistration}>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Name" name='name' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Email" name='email' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Password" name='password' className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" placeholder="Photo URL" name='photoURL' className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
              <label className="label font-bold">
                <span className="label-text text-lg">Already have an account?
                  <Link to='/login'><span className="ms-2 text-xl text-blue-600">Login</span></Link></span>
              </label>
            </div>
          </div>
        </form>
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
    </div>
  );
};

export default Register;