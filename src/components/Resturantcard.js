import { URL1 } from "../utils/constants";

const Resturantcard = (props) => {
  const { argu } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, sla } = argu?.info;
  // console.log(cardobj);

  return (
    <div className="h-[30rem] w-[18rem] box-border sm:h-[22rem] sm:w-[13rem] bg-sky-100 p-2 rounded-md transition-transform duration-250 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-sky-200 ">
      {/* <div className="res_card"> */}
      <img
        // className="res_img"
        className="h-[15rem] w-[18rem] sm:h-36 sm:w-48"
        src={`${URL1}${cloudinaryImageId}`}
        alt="img"
      ></img>
      <h3 className="font-semibold h-8 text-xl my-4 sm:text-lg sm:my-2 overflow-hidden">
        {name}
      </h3>
      <h4 className=" h-[4.7rem] overflow-hidden">{cuisines.join(", ")}</h4>
      <h4 className="bg-green-400 w-fit px-2 rounded-sm">{avgRating} ⭐</h4>
      <h4>{sla.deliveryTime} min 🕛</h4>
    </div>
  );
};

export default Resturantcard;
