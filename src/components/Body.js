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
    const response = await fetch("/api/swiggyData");
    const json = await response.json();
    console.log(json);

    const crd = json.data.cards;
    // console.log(crd);
    const [valid, other] = crd.filter(
      (c) => c?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    // console.log(valid);
    // console.log(other);

    const restaurants =
      valid?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    // console.log(restaurants);
    setlist(restaurants);
    setfilteredData(restaurants);
  };

  const stat = useStatus();
  // console.log(stat);

  if (!stat) {
    return <h1>YOU ARE OFFLINE</h1>;
  } else {
    return (
      <div className="">
        <div className="flex justify-center">
          <div>
            <input
              type="text"
              className="border border-black p-1 focus:border-blue-500  rounded transition duration-200 m-2 mt-6"
              value={searchText}
              onChange={(e) => {
                setsearchText(e.target.value);
              }}
            />
            <button
              className="bg-sky-300 hover:bg-blue-500 px-4 py-1 mr-4 rounded"
              onClick={() => {
                const searched = list.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredData(searched);
              }}
            >
              Search
            </button>

            <button
              className="px-4 py-1 bg-sky-300 hover:bg-blue-500 rounded mr-4"
              onClick={() => setfilteredData(list)}
            >
              Reset
            </button>

            <button
              className="px-4 py-1 bg-sky-300 rounded hover:bg-blue-500"
              onClick={() => {
                const filteredlist = list.filter(
                  (res) => res.info.avgRating > 4
                );
                setfilteredData(filteredlist);
              }}
            >
              Filter by Rating
            </button>
          </div>
        </div>

        {list.length === 0 ? (
          <Shimmer />
        ) : (
          <div className="ml-8 mt-4 flex flex-wrap justify-start gap-x-9 gap-y-7">
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
