import { Link } from "react-router-dom";

const Banner = () => {

    const description = <div className="px-8 pt-12 absolute rounded-xl md:w-[40%] items-center  left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)] h-full">
      <h2 className="text-5xl font-bold text-yellow-100 my-6">AUTO MOTIVE</h2>
      <h5 className="md:text-2xl text-sm font-bold text-yellow-500">Introducing the Exquisite Branded Car: Fuel Your Imagination!
      </h5>
      <p className="md:text-lg text-sm text-slate-200 pt-8">Our cars kindle imagination, spark adventures, and offer hours of thrilling joy.</p>
      <Link to={'/allcars'}><button className='btn text-white font-bold text-lg bg-yellow-600 mt-8 btn-warning'>ALL Cars</button></Link>
    </div>
  
    return (
      <div autoPlay='true' className="carousel w-full relative">
        <div id="slide1" className="carousel-item h-[30%]  relative w-full">
          <img src='https://i.ibb.co/MCLGfmQ/car1.jpg' className="w-full h-[500px] " />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 ">
            <a href="#slide4" className="btn btn-circle btn-warning">❮</a>
            <a href="#slide2" className="btn btn-circle btn-warning ms-2">❯</a>
          </div>
          {description}
        </div>
        <div id="slide2" className="carousel-item  h-[30%]  relative w-full">
          <img src='https://i.ibb.co/TMDqBYd/car2.jpg' className="w-full h-[500px]" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle  btn-warning ms-2">❮</a>
            <a href="#slide3" className="btn btn-circle  btn-warning ms-2">❯</a>
          </div>
          {description}
        </div>
        <div id="slide3" className="carousel-item h-[30%]  relative w-full">
          <img src='https://i.ibb.co/tH5tM6q/car3.jpg' className="w-full h-[500px]" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle  btn-warning ms-2">❮</a>
            <a href="#slide4" className="btn btn-circle  btn-warning ms-2">❯</a>
          </div>
          {description}
        </div>
        <div id="slide4" className="carousel-item h-[30%] relative w-full">
          <img src='https://i.ibb.co/yyR4fxd/car4.jpg' className="w-full h-[500px]" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle  btn-warning ms-2">❮</a>
            <a href="#slide5" className="btn btn-circle  btn-warning ms-2">❯</a>
          </div>
          {description}
        </div>
        <div id="slide5" className="carousel-item relative   w-full">
          <img src='https://i.ibb.co/h9vQYFj/car5.jpg' className="w-full h-[500px]" />
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle  btn-warning ms-2">❮</a>
            <a href="#slide1" className="btn btn-circle  btn-warning ms-2">❯</a>
          </div>
          {description}
        </div>
  
      </div>
     
    );
  };
  
  export default Banner;