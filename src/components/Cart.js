import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { URL1 } from "../utils/constants";
import { clearCart, removeItem } from "../utils/cartSlice";


const Cart = () => {
  const items = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  const handleClear = () => {
    dispatch(clearCart());
  };

  console.log(items);

  return (
    <div className="md:w-5/12 md:ml-[8%]">
      {items.length === 0 ? (
        <div className="absolute top-[50%] left-[40%] font-semibold text-4xl">
          Your Cart is Empty
        </div>
      ) : (
        <>
          <h1 className="text-4xl mb-8 mt-4">CART :</h1>
          {items.map((item) => (
            <div key={item.id} className="flex bg-sky-100 mb-4">
              <div className="h-20 w-20 m-2">
                <img
                  src={`${URL1}${item.imageId}`}
                  alt={item.name}
                  className="h-[100%] w-[100%] object-cover z-10"
                />
              </div>
              <div className="w-[60%] m-2">
                <p className="font-semibold mb-2">{item.name}</p>
                <p className="font-semibold">
                  ₹
                  {item.price === undefined
                    ? item.defaultPrice / 100
                    : item.price / 100}
                </p>
              </div>
              <div className="h-20 w-28 flex justify-center items-center m-2 p-2">
                <button
                  className="bg-sky-300 hover:bg-blue-500 px-2 py-1 rounded"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="h-28 flex justify-center items-center m-2 p-2">
            <button
              className="bg-sky-300 hover:bg-blue-500 px-2 py-1 rounded"
              onClick={handleClear}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
