import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { instance } from "../../../api/constants";
import { PagedProductReq } from "../../../utils/api.util";

// const initialState = {
//   data: [],
//   productsCount: 0,
//   params: "_page=1&_limit=5",
//   loading: false,
//   error: ""
// };

// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   PagedProductReq
// );

// export const productsSlice = createSlice({
//   name: "products",
//   initialState,
//   reducers: {},
//   extraReducers: (builder) => {
//     // read
//     builder.addCase(fetchProducts.fulfilled, (state, action) => {
//       const { products, count, params } = action.payload;
//       return {
//         ...state,
//         loading: false,
//         data: products,
//         productsCount: count,
//         params: params
//       };
//     });
//   }
// });

// export default productsSlice.reducer;

//import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";

export const getProducts = createAsyncThunk(
  "productsList/getProducts",
  async () => {
    try {
      const response = await instance.get("/products");
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const productsSlice = createSlice({
  name: "productsList",
  initialState: {
    products: [],
    isLoading: false,
    hasError: false
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.hasError = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.hasError = true;
        state.isLoading = false;
      });
  }
});

// Selectors
export const selectedProduct = (state) => state.productsList.products;
export const selectLoadingState = (state) => state.productsList.isLoading;
export const selectErrorState = (state) => state.productsList.hasError;

export default productsSlice.reducer;
