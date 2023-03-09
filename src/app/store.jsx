import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/product/productSlice";

const store = configureStore({
  reducer: {
    // user: usersSlice,
    products: productsSlice
  }
});

export default store;
