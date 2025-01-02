import { useState, useEffect } from "react";

const useResturantMenu = (resId) => {
  const [resMenu, setresMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.8415062&lng=77.58187&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );

    const json = await data.json();
    const cards =
      json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[1].card
        ?.card?.itemCards;
    setresMenu(cards);
  };

  return resMenu;
};

export default useResturantMenu;
