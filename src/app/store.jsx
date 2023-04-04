import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart/cartSlice";

const store = configureStore({
  reducer: {
    // user: usersSlice,
    //products: productsSlice
    cart: cartReducer
  }
});

export default store;
