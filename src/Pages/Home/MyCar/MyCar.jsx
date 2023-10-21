import useTitle from '../../../Hook/Hook';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import MyCarCard from './MyCarCard';


const MyCar = () => {
    useTitle("My Cart");
    const { user } = useContext(AuthContext);
    console.log(user);
    const cars = useLoaderData();
    const { _id, picture, name, price, rating, subCategory, yourName, yourEmail, quantity } = cars;

fetch(`https://brand-shop-server-ixosafvvp-ateka-sultanas-projects.vercel.app/mycar`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

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
      Array.isArray(cars) ? (
      cars.map((car) => <MyCarCard key={car._id} car={car}></MyCarCard>)
  ) : (
     <div>No cars found.</div>
  )
}
            </div>
        </div>
    );
};

export default MyCar;