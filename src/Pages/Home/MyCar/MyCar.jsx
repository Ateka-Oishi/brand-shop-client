import useTitle from '../../../Hook/Hook';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import MyCarCard from './MyCarCard';


const MyCar = () => {
    useTitle("My Cart");
    const { user } = useContext(AuthContext);
    const cars = useLoaderData();
    console.log(cars);

    return (
        <div>
            <div className="p-8 overflow-x-auto w-full text-lg">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className="w-[29%] md:text-lg text-center">Product</th>
                            <th className="w-[12%] md:text-lg text-center">Price</th>
                            <th className="w-[10%] md:text-lg text-center">Quantity</th>
                            <th className="w-[10%] md:text-lg text-center">Rating</th>
                            <th className="w-[15%] md:text-lg text-center">Your Name</th>
                            <th className="w-[20%] md:text-lg text-center">Action</th>
                            <th className="w-[20%] md:text-lg text-center"></th>


                        </tr>
                    </thead>
                </table>
                {
                    cars.map(car => <MyCarCard key={car.id} car={car}></MyCarCard>)
                }
            </div>
        </div>
    );
};

export default MyCar;