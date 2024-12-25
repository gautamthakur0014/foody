"use strict";
import Resturantcard from "./Resturantcard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [list, setlist] = useState([]); // Initialize as an empty array
  const [filteredData, setfilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8344396&lng=77.5698527&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const crd=json.data.cards;
    const [valid, other] = crd.filter(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  
    const restaurants =
      valid.card.card.gridElements.infoWithStyle.restaurants;
    console.log(restaurants);
    setlist(restaurants); // Ensure it's an array
    setfilteredData(restaurants);
  };

  if (list.length === 0) return <Shimmer/>;

  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          className="search-box"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const searched = list.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilteredData(searched);
          }}
        >
          Search
        </button>

        <button className="reset" onClick={()=>setfilteredData(list)}>reset</button>
      </div>
      <div className="filter">
        <button
          className="filter_btn"
          onClick={() => {
            const filteredlist = list.filter((res) => res.info.avgRating > 4);
            setfilteredData(filteredlist);
          }}
        >
          Filter by Rating
        </button>
      </div>
      <div className="res_container">
        {filteredData.map((restaurant) => (
          <Resturantcard key={restaurant.info.id} argu={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
