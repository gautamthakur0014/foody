import { useState, useEffect } from "react";

const useResturantMenu = (resId) => {
  const [resMenu, setresMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`/api/swiggy-menu?resId=${resId}`);

    const json = await data.json();
    // console.log(json);

    const cards = json?.data?.cards.find(
      (items) => items.groupedCard?.cardGroupMap?.REGULAR.cards
    );
    const ocard = cards.groupedCard?.cardGroupMap?.REGULAR.cards;
    // console.log(ocard);

    // const ncard = ocard.find((item) => item.card.card.itemCards);
    const ncard1 = ocard.filter(
      (item) =>
        item.card.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    console.log(ncard1);
    // const rcard = ncard.card?.card?.itemCards;
    // console.log(rcard);

    setresMenu(ncard1);
  };

  return resMenu;
};

export default useResturantMenu;
