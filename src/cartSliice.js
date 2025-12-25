import { createSlice } from "@reduxjs/toolkit";

const storedItems = localStorage.getItem("cartItems");

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: storedItems ? JSON.parse(storedItems) : []
  },
  reducers: {
    addtobag: (state, action) => {
      state.items.push(action.payload);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    removeFromBag: (state, action) => {
      state.items.splice(action.payload, 1);
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    increment: (state, action) => {
      const item = state.items[action.payload];
      item.quantity += 1;
      item.totalPrice = item.quantity * item.price;
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    decrement: (state, action) => {
      const item = state.items[action.payload];
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.totalPrice = item.quantity * item.price;
      } else {
        item.quantity = 1;
        item.totalPrice = item.price;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    // ✅ NEW: CLEAR CART AFTER ORDER CONFIRM
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    }
  }
});

export const {
  addtobag,
  removeFromBag,
  increment,
  decrement,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;
