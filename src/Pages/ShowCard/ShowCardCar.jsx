import { Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TabCar from "../Shared/Navbar/TabCar";
import CategoryCar from "../Home/CategoryCar/CategoryCar";
import Advertisement from "./Advertisement";
import { useLoaderData, useParams } from "react-router-dom";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 4,
    },
    tablet: {
      breakpoint: { min: 768 },
      items: 3,
      slidesToSlide: 3,
    },
    mobile: {
      breakpoint: { max: 640, min: 540 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  


const ShowCardCar = () => {

    const params = useParams()
    const categoryCars = useLoaderData();


  if (!categoryCars || !Array.isArray(categoryCars)) {
    return (
      <div>
        <p>No Products available in this category</p>
      </div>
    );
  }

  return(
    <div>
        <Advertisement></Advertisement>
      <h1 className="text-3xl text-[gray] text-center mt-10 mb-5">
        <strong>Displaying products for brand</strong>
      </h1>
      <hr />
      <div className="py-8">
        <Tabs className="border-0 rounded-lg shadow-2xl">
          <Carousel
            responsive={responsive}
            additionalTransfrom={0}
            arrows
            centerMode={false}
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            showDots={true}
          >
         <div hidden> <CategoryCar key={params} params={params} categoryCars={categoryCars}></CategoryCar></div>

         {categoryCars.map((categoryCar) => (
  <TabCar key={categoryCar._id} categoryCar={categoryCar}  />
))}
          </Carousel>
        </Tabs>
      </div>
    </div>
  );
};

export default ShowCardCar;
