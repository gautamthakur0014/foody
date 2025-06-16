import { useDispatch } from "react-redux";
import { URL1 } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const Itemlist = ({ items }) => {
  const dispatch = useDispatch();
  const handleClick = (info) => {
    dispatch(addItem(info));
    // console.log(info);
  };

  return (
    <div>
      {items.map((list) => (
        <div
          key={list.card.info.id}
          className="bg-sky-100 mx-2 my-4 p-2 md:flex text-left "
        >
          {/* <div> */}
          <div className="h-[15rem] w-[18rem] md:w-32 md:h-32 relative z-0 mr-2 inline md:block bg-red-300">
            <img
              src={`${URL1}${list.card.info.imageId}`}
              alt={list.card.info.name}
              className="h-[100%] w-100%] object-cover z-10"
            />
            <button
              className=" z-20 absolute top-1 left-1 bg-black bg-opacity-50 text-white p-2 text-sm"
              onClick={() => handleClick(list.card.info)}
            >
              Add+
            </button>
          </div>

          <div className="w-[80%]">
            <span className="font-semibold">{list.card.info.name}</span>
            <br />
            <span className="font-semibold">
              ₹
              {list.card.info.price === undefined
                ? list.card.info.defaultPrice / 100
                : list.card.info.price / 100}
            </span>
            <p className="text-wrap hidden md:block text-m">
              {list.card.info.description}
            </p>
          </div>
          <p className="text-wrap text-s md:hidden">
            {list.card.info.description}
          </p>
          {/* </div> */}
        </div>
      ))}
    </div>
  );
};

export default Itemlist;

/*

{
    "id": "120901520",
    "name": "Thalappakatti XL Chicken Biryani",
    "category": "Biryani Variety",
    "description": "Super - Sized portion of our Legendary seeraga samba Chicken Biryani with hand-ground spices from the foothills - Served With Egg ,Raita and Salna ; Nutritional Information (per 100g) : Energy - 163kcal, Carbs - 20.1g, Protein - 9.2g, Fats - 5.1g.",
    "imageId": "FOOD_CATALOG/IMAGES/CMS/2024/8/8/24723952-d3e3-4ee8-80af-f22d6a103b99_a3b97be5-b8ce-49d4-9503-dc867b9e5262.jpeg",
    "inStock": 1,
    "price": 32900,
    "variants": {},
    "variantsV2": {},
    "addons": [
        {
            "groupId": "210875548",
            "groupName": "BBQ Starters",
            "choices": [
                {
                    "id": "135206133",
                    "name": "Barbeque Chicken 1/4",
                    "price": 19900,
                    "inStock": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206131",
                    "name": "Tandoori Chicken 1/4",
                    "price": 19900,
                    "inStock": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206127",
                    "name": "Peri-peri Red Chicken 1/4",
                    "price": 19900,
                    "inStock": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206126",
                    "name": "Pepper Chicken Barbeque 1/4",
                    "price": 19900,
                    "inStock": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206140",
                    "name": "Alfaham Barbeque 1/4",
                    "price": 19900,
                    "inStock": 1,
                    "isEnabled": 1
                }
            ],
            "maxAddons": 1,
            "maxFreeAddons": -1
        },
        {
            "groupId": "210875552",
            "groupName": "Starters",
            "choices": [
                {
                    "id": "135206150",
                    "name": "Moru Moru Wings (5pcs)",
                    "price": 19900,
                    "inStock": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206146",
                    "name": "Chicken 65 (half)",
                    "price": 19900,
                    "inStock": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206149",
                    "name": "Mutton Kola (4 Pcs)",
                    "price": 19900,
                    "inStock": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206148",
                    "name": "CHILLI WINGS (5pcs)",
                    "price": 19900,
                    "inStock": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206151",
                    "name": "BLACK PEPPER WINGS (5pcs)",
                    "price": 19900,
                    "inStock": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206147",
                    "name": "Crispy Fried Lollipop (half)",
                    "price": 19900,
                    "isEnabled": 1
                }
            ],
            "maxAddons": 1,
            "maxFreeAddons": -1
        },
        {
            "groupId": "210875556",
            "groupName": "Beverages",
            "choices": [
                {
                    "id": "135206136",
                    "name": "Peach Passion",
                    "price": 6900,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206145",
                    "name": "Lemon Soda",
                    "price": 6900,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206144",
                    "name": "Lemon Juice",
                    "price": 6900,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206143",
                    "name": "Thalappakatti Masala Cola",
                    "price": 8900,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206142",
                    "name": "NEELANIMBU SARBATH",
                    "price": 6900,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206141",
                    "name": "Inji Sarbath",
                    "price": 6900,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206139",
                    "name": "Guava Goodness",
                    "price": 6900,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206138",
                    "name": "Merry Mango",
                    "price": 6900,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206137",
                    "name": "Sunshine Sarbath",
                    "price": 6900,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                }
            ],
            "maxAddons": 1,
            "maxFreeAddons": -1
        },
        {
            "groupId": "210875559",
            "groupName": "Dessert",
            "choices": [
                {
                    "id": "135206134",
                    "name": "Bread Halwa",
                    "price": 8900,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206135",
                    "name": "Gulab Jamun 2 Pcs",
                    "price": 6900,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                }
            ],
            "maxAddons": 1,
            "maxFreeAddons": -1
        },
        {
            "groupId": "210875560",
            "groupName": "Accompaniment",
            "choices": [
                {
                    "id": "135206132",
                    "name": "NON VEG GRAVY",
                    "price": 1500,
                    "inStock": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206128",
                    "name": "EXTRA RAITHA",
                    "price": 1500,
                    "inStock": 1,
                    "isVeg": 1,
                    "isEnabled": 1
                },
                {
                    "id": "135206130",
                    "name": "Boiled Egg",
                    "price": 1500,
                    "inStock": 1,
                    "isEnabled": 1
                }
            ],
            "maxAddons": 1,
            "maxFreeAddons": -1
        }
    ],
    "itemAttribute": {
        "vegClassifier": "NONVEG"
    },
    "ribbon": {
        "text": "Bestseller",
        "textColor": "#ffffff",
        "topBackgroundColor": "#d53d4c",
        "bottomBackgroundColor": "#b02331"
    },
    "showImage": true,
    "itemBadge": {},
    "badgesV2": {},
    "isBestseller": true,
    "ratings": {
        "aggregatedRating": {
            "rating": "4.3",
            "ratingCount": "362 ratings",
            "ratingCountV2": "362"
        }
    },
    "itemPriceStrikeOff": true
}

*/
