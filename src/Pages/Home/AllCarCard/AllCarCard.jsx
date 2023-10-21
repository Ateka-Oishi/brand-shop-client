import { Link } from "react-router-dom";

const AllCarCard = ({car, addToCart}) => {
    console.log(car);

    const {_id, picture, name, price, rating, subCategory, yourName, yourEmail, quantity } = car;

    return (
        <div className="overflow-x-auto w-full">
        <table className="table w-full">
            <tbody>
                
                {/* row 1 */}
                <tr className="border-2 font-bold md:font-lg text-center">
                    <td className="shadow-lime-300 my-8 border-0 bg-gradient-to-r from-red-200 to-lime-50 w-[30%]">
                        <div className="flex items-center space-x-3">
                            <div className="avatar me-8">
                                <div className="mask mask-squircle w-[90px] h-24">
                                    <img src={picture}/>
                                </div>
                            </div>
                            <div>
                                <div className="md:font-bold">{name}</div>
                                <div className="text-sm opacity-50">{subCategory}</div>
                            </div>
                        </div>
                    </td>
                    <td className="shadow-lime-300 my-8 border-0 w-[12%]">
                        $ {price}  
                    </td>
                    <td className="shadow-lime-300 my-8 border-0 w-[12%] ">
                        {quantity}
                    </td>
                    <td className="shadow-lime-300 my-8 border-0 w-[12%]">
                        {rating}
                    </td>
                    <td className="shadow-lime-300 my-8 border-0 w-[24%] "><a href={yourEmail}>{yourName}</a></td>
                    <th className=" w-20">
                        <button className="btn btn-error text-white "><Link to={`/allcars/${_id}`}>Details</Link></button>

                    </th>
                </tr>
                {/* row 2 */}
                
            </tbody>

        </table>
    </div>
    );
};

export default AllCarCard;