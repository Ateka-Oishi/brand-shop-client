import { FaPenSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TabPanel, Tabs } from "react-tabs";

const TabCar = ({ categoryCar }) => {
    const { picture, brandName, name, price, rating, details, subCategory } = categoryCar;
  
    return (
      <div className="m-6 rounded-lg">
        <div>
          <Tabs className="p-6">
            <TabPanel className="border-1 shadow-lg mt-2">
              <div className="card bg-orange-50 border-2 shadow-xl">
                <div className="px-2 w-[90%] mx-auto mt-[-20px]">
                  <img src={picture} className="rounded-xl shadow-red-400 shadow-lg w-full h-64" alt="Product" />
                </div>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">{name}</h2>
                  <h2 className="card-title">{brandName}</h2>
                  <p>Type: {subCategory}</p>
                  <p>Price: $ {price}</p>
                  <p>Rating: {rating}</p>
                  <div className="card-actions">
                    <button className="btn btn-error text-white">
                      <Link to={`/allcars/${categoryCar._id}`}>Details</Link>
                    </button>
                    <button className="btn btn-error text-white">
                      <Link to={`/updatecar/${categoryCar._id}`}>
                        <FaPenSquare>Update</FaPenSquare>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </TabPanel>
            
          </Tabs>
          <TabPanel><Tabs></Tabs></TabPanel>
          <TabPanel></TabPanel>
        </div>
      </div>
    );
  };
  export default TabCar;