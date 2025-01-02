"use strict";
import { Link } from "react-router-dom";
import Resturantcard from "./Resturantcard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import useStatus from "../utils/useStatus";

const Body = () => {
  const [searchText, setsearchText] = useState("");
  const [list, setlist] = useState([]); // Initialize as an empty array
  const [filteredData, setfilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.8415062&lng=77.58187&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    const crd = json.data.cards;
    console.log(crd);
    const [valid, other] = crd.filter(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(valid);
    console.log(other);

    const restaurants =
      valid?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurants);
    setlist(restaurants); // Ensure it's an array
    setfilteredData(restaurants);
  };

  const stat = useStatus();
  console.log(stat);

  if (!stat) {
    return <h1>YOU ARE OFFLINE</h1>;
  } else {
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

          <button className="reset" onClick={() => setfilteredData(list)}>
            reset
          </button>
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
        {list.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="res_container">
            {filteredData.map((restaurant) => (
              <Link
                className="no-decoration"
                key={restaurant.info.id}
                to={`/resturants/${restaurant.info.id}`}
              >
                <Resturantcard argu={restaurant} />
              </Link>
            ))}
          </div>
        )}
      </div>
    );
  }
};

export default Body;
