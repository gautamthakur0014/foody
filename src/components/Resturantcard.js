import { URL1 } from "../utils/constants";

const Resturantcard = (props) => {
  const { argu } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = argu?.info;
  // console.log(cardobj);

  return (
    <div className="res_card">
      <img
        className="res_img"
        src={`${URL1}${cloudinaryImageId}`}
        alt="img"
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime} min</h4>
    </div>
  );
};

export default Resturantcard;
