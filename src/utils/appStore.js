import { configureStore } from "@reduxjs/toolkit";
// standard naming beacuse we are importing reducer
// can import with with any name, name doesnt matter beacuse it is named export
import userReducer from "./userSlice";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    cart:cartReducer,
  },
});

export default appStore;
