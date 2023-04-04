import { createSlice } from "@reduxjs/toolkit";

// const initialState = [];

// const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     add(state, action) {
//       state.push(action.payload);
//     },
//     remove(state, action) {
//       return state.filter((item) => item.id !== action.payload);
//     }
//   }
// });

// export const { add, remove } = cartSlice.actions;
// export default cartSlice.reducer;

// const initialState = {
//   shoppingList: [],
//   productQty: 0,
//   totalPrice: 0
// };

// const totalPriceHandler = (list) => {
//   let qty = 0;
//   let total = 0;
//   list.map((item) => {
//     qty += item.qty;
//     total += item.qty * item.price;
//   });
//   return { qty, total };
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: [],
//     productQty: 0,
//     totalPrice: 0
//   },
//   reducers: {
//     addItem(state, action) {
//       const newItem = action.payload;
//       const existingItem = state.items.find((item) => item.id === newItem.id);
//       if (existingItem) {
//         existingItem.quantity++;
//       } else {
//         state.items.push({ ...newItem, quantity: 1 });
//       }

//       state.totalPrice += newItem.price;
//       state.productQty++;
//     },
//     totalPrice(state) {
//       const { qty, total } = totalPriceHandler(state.items);
//       state.productQty = qty;
//       state.totalPrice = total;
//     }
//   }
// });

// export const { addItem } = cartSlice.actions;

// export default cartSlice.reducer;

const initialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, { payload }) {
      const { id } = payload;
      const find = state.find((item) => item.id === id);

      if (find) {
        return state.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1
              }
            : item
        );
      } else {
        state.push({
          ...payload,
          quantity: 1
        });
      }
    },
    increment(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      );
    },
    decrement(state, { payload }) {
      return state.map((item) =>
        item.id === payload
          ? {
              ...item,
              quantity: item.quantity - 1
            }
          : item
      );
    },
    clear(state) {
      return [];
    },
    checkOut(state) {}
  }
});

export const { addToCart, increment, decrement, clear } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;
