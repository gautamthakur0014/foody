import useResturantMenu from "./utils/useResturantMenu";
import { useParams } from "react-router-dom"; //used to read dynamic part of url (:resId)

const ResturantMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  
  const resMenu =useResturantMenu(resId);
  return (
    <div className="resmenu">
      {resMenu.map((ca) => (
        <li key={ca?.card?.info?.id}>
          {ca.card.info.name}
          <span>price :</span>{" "}
          {ca.card.info.price / 100}
        </li>
        ))}
    </div>
  );
};

export default ResturantMenu;
