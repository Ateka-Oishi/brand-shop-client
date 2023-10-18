import './Gallery.css'
const Gallery = () => {
    return (
        <div className='my-4 p-2 space-y-6'>
            <div className=' space-y-4 pb-6 h-[50%] w-full space-x-2'>
                <h1 className="text-center md:text-3xl text-xl my-4 w-4/12 mx-auto font-bold text-orange-500 uppercase border-y-4 py-4">Out Top Sale Products</h1>
                <div className="text-lime-800 font-semibold flex justify-evenly mb-4"></div>
            </div>

            <div className='row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full'>
                <div className='h-[60%]'>
                    <div className='img-area'>
                        <img className='image h-full' src="https://i.ibb.co/R9Cjy3D/sportscar.jpg" alt="" />
                        <div className='img-text '>
                            <h1>Sports Racer</h1>
                            <h3>Racing Car</h3>
                            <h3>Price: $21</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image h-full' src="https://i.ibb.co/tpWVkhF/bmw.jpg" alt="" />
                        <div className='img-text'>
                            <h1>BMW M Car</h1>
                            <h3>Regular Used Car</h3>
                            <h3>Price: $21</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image h-full' src="https://i.ibb.co/FVH2w4h/honda.webp" alt="" />
                        <div className='img-text'>
                            <h1>Honda Car</h1>
                            <h3>Regular Used Car</h3>
                            <h3>Price: $20</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image' src="https://i.ibb.co/fxcK8Wq/toyota.webp" alt="" />
                        <div className='img-text'>
                            <h1>Toyota Suv</h1>
                            <h3>Regular Car</h3>
                            <h3>Price: $11</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-full'>
                <div className='h-[60%]'>
                    <div className='img-area'>
                        <img className='image h-full' src="https://i.ibb.co/kGhp04d/ford.jpg" alt="" />
                        <div className='img-text'>
                            <h1>Ford F-Series</h1>
                            <h3>Luxurious Car</h3>
                            <h3>Price: $12</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image h-full' src="https://i.ibb.co/0qxrH22/meercedes.webp" alt="" />
                        <div className='img-text'>
                            <h1>Mercedes Benz</h1>
                            <h3>Luxurious Car</h3>
                            <h3>Price: $12</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image' src="https://i.ibb.co/rfySzYr/Focus.jpg" alt="" />
                        <div className='img-text'>
                            <h1>Focus2Mov Car</h1>
                            <h3>Fashionable Car</h3>
                            <h3>Price: $12</h3>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='img-area'>
                        <img className='image' src="https://i.ibb.co/h9tR6GR/tesla.webp" alt="" />
                        <div className='img-text'>
                            <h1>Tesla Model 3 Car</h1>
                            <h3>Exclusive Car</h3>
                            <h3>Price: $22</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;