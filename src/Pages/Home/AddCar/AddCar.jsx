import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import useTitle from "../../../Hook/Hook";
import Swal from "sweetalert2";

const AddCar = () => {
    const { user } = useContext(AuthContext);
    const { navigate } = useNavigate();
    useTitle("Add Products");
    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const subCategory = form.sub_category.value;
        const picture = form.picture.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const sellerName = form.seller_name.value;
        const sellerEmail = form.seller_email.value;
        const details = form.description.value;
        let category_id;
        subCategory == 'Toyota Car' ? (category_id = 100) :
            subCategory == 'Ford Car' ? (category_id = 300) :
                subCategory == 'BMW Car' ? (category_id = 200) :
                    subCategory == 'Mercedes-Benz Car' ? (category_id = 400) :
                        subCategory == 'Tesla Car' ? (category_id = 500) :
                            subCategory == 'Honda Car' ? (category_id = 600) : category_id = 0;


        const newAddedProduct = { name, brand_name, picture, category_id, subCategory, price, rating, sellerEmail, sellerName, quantity, details };
        console.log(newAddedProduct);
        fetch(`http://localhost:5000/cars`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newAddedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                Swal.fire({
                    title: 'Success!',
                    text: 'Product added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })

            })
        navigate('/');
    }

    return (
        <div>
            <h1 className='text-4xl uppercase font-serif text-center font-bold bg-gradient-to-b from-green-400 to-green-300 pt-4'>Add a Product</h1>
            <div className="hero bg-gradient-to-t to-green-300 from-yellow-100">
                <div className="hero-content py-8 md:w-[50%] w-full  flex-col lg:flex-row-reverse">
                    <div className="card w-full  shadow-2xl  shadow-red-400 bg-base-400">
                        <form onSubmit={handleAddProduct}>
                            <div className="card-body ">
                                <div className="form-control ">
                                    <label className="label ">
                                        <span className="label-text text-lg font-semibold">Product Name</span>
                                    </label>
                                    <input type="text" placeholder="Name" name='name' className="input input-bordered" />
                                </div>
                                <div className="form-control ">
                                    <label className="label ">
                                        <span className="label-text text-lg font-semibold">Brand Name</span>
                                    </label>
                                    <input type="text" placeholder="Brand Name" name='brand_name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Picture URL</span>
                                    </label>
                                    <input type="text" placeholder="Photo URL" name='picture' className="input input-bordered" />
                                </div>

                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                                        <label className="block text-lg font-semibold tracking-wide label-text   mb-2">
                                            Sub-Category
                                        </label>
                                        <div className="relative">

                                            <select className="block appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" name='sub_category' id="grid-state">
                                                <option >Toyota Car</option>
                                                <option >Ford Car</option>
                                                <option >BMW Car</option>
                                                <option >Mercedes-Benz Car</option>
                                                <option >Tesla Car</option>
                                                <option>Honda Car</option>
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
                                        <span className="label-text text-lg font-semibold">Price</span>
                                    </label>
                                    <input type="number" placeholder="Price" name='price' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Rating</span>
                                    </label>
                                    <input type="number" placeholder="Rating Out of 5" name='rating' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Quantity</span>
                                    </label>
                                    <input type="number" placeholder="Quantity" name='quantity' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Seller Name</span>
                                    </label>
                                    <input type="text" placeholder={user?.displayName} name='seller_name' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Seller Email</span>
                                    </label>
                                    <input type="email" placeholder={user?.email} name='seller_email' className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-lg font-semibold">Description</span>
                                    </label>
                                    <input type="text" placeholder="Description" name='description' className="input textarea row-2 input-bordered" />
                                </div>

                                <div className="form-control mt-6">
                                    <button className="btn btn-error font-bold text-lg">Add Product</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >
        </div>
    );
};
export default AddCar;