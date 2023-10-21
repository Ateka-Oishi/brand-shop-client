
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCar = () => {
    const Car = useLoaderData();
    const { _id, name, subCategory, picture, price, rating, quantity, details ,yourName, yourEmail } = Car;
    // const userEmail = localStorage.getItem('user')
    // console.log(userEmail);

    const handleUpdateCar = (e) =>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const subCategory = form.sub_category.value;
        const picture = form.picture.value;
        const price= form.price.value;
        const  rating= form.rating.value;
        const quantity = form.quantity.value;
        const yourName = form.your_name.value;
        const yourEmail = form.your_email.value;
        const details = form.details.value;
        let category_id;
        subCategory == 'Toyota' ? (category_id = 100) :  
        subCategory == 'Ford' ? (category_id = 300) :
        subCategory == 'BMW' ? (category_id = 200) : 
        subCategory == 'Mercedes-Benz' ? (category_id = 400) : 
        subCategory == 'Tesla' ? (category_id = 500) :
        subCategory == 'Honda' ? (category_id = 600) : category_id = 0; 


        const updatedProduct = {name, brandName, picture,category_id, subCategory, price, rating, yourEmail, yourName, quantity, details};
        console.log(updatedProduct);
        //send data to server from client
        fetch(`https://brand-shop-server-ixosafvvp-ateka-sultanas-projects.vercel.app/cars/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Car updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            else{
                Swal.fire({
                    title: 'Error',
                    text: 'Car not found or update failed',
                    icon: 'error',
                    confirmButtonText: 'OK'
                  });
            }

        })
    }


    return (
        <div className="hero bg-base-200">
        <div className="hero-content py-4 w-[50%] flex-col lg:flex-row-reverse">
            <div className="card w-full  shadow-2xl bg-base-100">
                <form onSubmit={handleUpdateCar}>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Product Name</span>
                            </label>
                            <input type="text" placeholder="Name" name='name' defaultValue={name} className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" placeholder="Brand Name" name='brandName' defaultValue='brandName' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Picture URL</span>
                            </label>
                            <input type="text" placeholder="Photo URL" defaultValue={picture} name='picture' className="input input-bordered" />
                        </div>

                        <div className="flex flex-wrap -mx-3 mb-2">
                            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                <label className="block  tracking-wide label-text   mb-2">
                                    Sub-Category
                                </label>
                                <div className="relative">

                                    <select defaultValue={subCategory} className="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='sub_category' id="grid-state">
                                        <option >Toyota</option>
                                        <option >Ford</option>
                                        <option >BMW</option>
                                        <option >Mercedes-Benz</option>
                                        <option > Tesla</option>
                                        <option>Honda</option>
                                    </select>

                                    <div className="pointer-events-none absolute inset-y-0 left-32 flex items-center px-2 text-gray-700">
                                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                    </div>
                                </div>
                            </div>
                        </div>


                        {/* ///// */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>
                            <input type="number" defaultValue={price} placeholder="Price" name='price' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" defaultValue={rating} placeholder="Rating Out of 5" name='rating' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input type="number" placeholder="Quantity" defaultValue={quantity} name='quantity' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" defaultValue={yourName} placeholder={"Your Name"} name='your_name' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <input type="email" defaultValue={yourEmail} placeholder="Your Email" name='your_email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <input type="text" defaultValue={details} placeholder="Details" name='details' className="input textarea row-2 input-bordered" />
                        </div>

                        <div className="form-control mt-6">
                           <button type='submit' className="btn btn-primary"><Link to='/allcars/${categoryCar._id}'>Update Car</Link></button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div >
    );
};

export default UpdateCar;