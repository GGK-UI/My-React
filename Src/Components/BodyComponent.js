import RestroCardComponent from "./RestroCardComponent";
import resArryListObj from "../Utils/mockData";
import { useState } from "react";


const BodyComponent = () => {

const [restroList , setRestroList] = useState(resArryListObj);
  
  return (
    <div className="body">
      <div className="search">
        <button 
        className="filter-btn" 
        onClick={() => {
          const filterData = restroList.filter(
            (res) => res.info.avgRating > 4.2
          );
          setRestroList(filterData);
          }}
          >
            Top Rated
          </button>
      </div>
      <div className="restro-container">
        {restroList.map((restro) => (
          <RestroCardComponent key={restro.info.id} resData={restro} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
