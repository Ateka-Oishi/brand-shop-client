import { useState } from 'react';

const useCars = () => {
    const [cars, setCars] = useState([]);
    fetch('https://brand-shop-server-ixosafvvp-ateka-sultanas-projects.vercel.app/cars')
    .then(res => res.json())
    .then(data => setCars(data))
    
    return (
        cars
        
    );
};

export default useCars;