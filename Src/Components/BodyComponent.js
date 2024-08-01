import RestroCardComponent from "./RestroCardComponent";
import ShimmarComponent from "./ShimmarComponent";
import { useEffect, useState } from "react";

const BodyComponent = ( ) => {

  const [restroList, setRestroList]=useState([]);

  const [filterRest , setFilterRest]=useState([]);

  const [search , setSearch]=useState("");

  

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async() => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3492985&lng=78.4158587&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    //data.cards[4].card.card.gridElements.infoWithStyle.restaurants[0].info
    const json = await data.json();
    setRestroList(
      json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilterRest(json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants);
  };
  
  return restroList.length === 0 ? <ShimmarComponent /> : (
    <div className="body">
      <div className="search">
      <div className="filter-search">
        <input type="text" className="input" value={search} onChange={(i) => {
          setSearch(i.target.value);
        }} />
        <button className="search-Btn" onClick={() => {
          const filterRestro = restroList.filter((res) => res.info.name.toLowerCase().includes(search));
          setFilterRest(filterRestro);
        }}>Search</button>
      </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterData = restroList.filter(
              (res) => res?.info?.avgRating > 4.2
            );
            setFilterRest(filterData);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="restro-container">
        {filterRest.map((restro) => (
            <RestroCardComponent key={restro.info.id} resData={restro} />
          ))}
      </div>
    </div>
  );
};

export default BodyComponent;
