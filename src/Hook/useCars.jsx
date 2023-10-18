import { useState } from 'react';

const useCars = () => {
    const [cars, setCars] = useState([]);
    fetch('http://localhost:5000/cars')
    .then(res => res.json())
    .then(data => setCars(data))
    return (
        
        cars
        
    );
};

export default useCars;