import useResturantMenu from "../utils/useResturantMenu";
import Itemlist from "./Itemlist";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ResturantMenu = () => {
  const { resId } = useParams();
  const resMenu = useResturantMenu(resId);

  // Track which category is expanded (by index)
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index, event) => {
    event.stopPropagation(); // Prevent clicks from bubbling up
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="-z-10 md:ml-[20%]">
      {resMenu.map((ca, index) => (
        <div
          key={index}
          className="h-auto m-10 bg-sky-200 text-center p-2 rounded-xl md:w-4/6"
        >
          {/* Only this title is clickable */}
          <div
            onClick={(e) => toggleExpand(index, e)}
            className="cursor-pointer font-semibold"
          >
            {`${ca.card.card.title} (${ca.card.card.itemCards.length}) ⬇️`}
          </div>

          {/* Show item list only if current index is expanded */}
          {expandedIndex === index && (
            <Itemlist items={ca.card.card.itemCards} />
            // <Itemlist items={ca.card.card.itemCards} />
          )}
        </div>
      ))}
    </div>
  );
};

export default ResturantMenu;
