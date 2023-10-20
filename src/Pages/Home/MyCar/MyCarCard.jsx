// import React from 'react';

import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyCarCard = ({ car }) => {
    console.log(car);
    const { _id, picture, name, price, rating, subCategory, yourName, yourEmail, quantity } = car;

    const handleDelete = ( id )=> {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to cancel this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-ixosafvvp-ateka-sultanas-projects.vercel.app/cars/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )

                        }
                    })
            }
        })

    }
    return ( 
        <div className="overflow-x-auto w-full">
            <table className="table w-full">
                <tbody>
                    <tr className="border-2 text-center">
                        <td className="shadow-lime-300 my-8 border-0 bg-cyan-100 w-[30%]">
                            <div className="flex items-center space-x-3">
                                <div className="avatar me-8">
                                    <div className="mask mask-squircle w-[90px] h-24">
                                        <img src={picture} />
                                    </div>
                                </div>
                                <div>
                                    <div className="font-bold">{name}</div>
                                    <div className="text-sm opacity-50">{subCategory}</div>
                                </div>
                            </div>
                        </td>
                        <td className="shadow-lime-300 my-8 border-0 w-[12%] bg-cyan-200">
                            $ {price}
                        </td>
                        <td className="shadow-lime-300 my-8 border-0 w-[12%] bg-cyan-200">
                            {quantity}
                        </td>
                        <td className="shadow-lime-300 my-8 border-0 w-[12%] bg-cyan-200">
                            {rating}
                        </td>
                        <td className="shadow-lime-300 my-8 border-0 w-[24%] bg-cyan-200"><a href={yourEmail}>{yourName}</a></td>
                        <td className="shadow-lime-300 my-8 border-0 w-[12%] bg-cyan-200">
                            <div className="text-red-500 flex text-4xl gap-4">
                                <div>
                                    <button onClick={() => handleDelete(_id)}>
                                        <FaTrash></FaTrash></button>
                                </div>
                            </div>
                        </td>
                        <td className=" bg-cyan-200 w-20">
                            <button className="btn btn-error text-white "><Link to={`/allcars/${categoryCar._id}`}>Details</Link></button>
                        </td>
                    </tr>
                    {/* row 2 */}

                </tbody>

            </table>
        </div>
    );
};

export default MyCarCard;