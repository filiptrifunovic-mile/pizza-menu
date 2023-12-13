import { createSlice } from "@reduxjs/toolkit";

/* eslint-disable no-unused-vars */
const initialState = {
  // cart: [],
  cart: [
    {
      pizzaId: 12,
      name: "Ama",
      quantity: 2,
      unitPrice: 15,
      totalPrice: 30,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addIdem(state, action) {
      state.cart.push(action.payload);
    },
    deleteIdem(state, action) {
      state.cart = state.cart.flter((item) => item.pizzaId !== action.payload);
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addIdem,
  deleteIdem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
