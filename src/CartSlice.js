// src/CartSlice.js
import { createSlice } from "@reduxjs/toolkit";

/*
  State shape:
  {
    items: [
      { id, name, price, image, category, quantity }
    ]
  }
*/

const initialState = {
  items: []
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // payload: full product object (id, name, price, image, category)
    addItem: (state, action) => {
      const product = action.payload;
      const existing = state.items.find((it) => it.id === product.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },

    // payload: product id
    removeItem: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((it) => it.id !== id);
    },

    // payload: { id, quantity } - quantity is new quantity (>=0)
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existing = state.items.find((it) => it.id === id);
      if (!existing) return;
      if (quantity <= 0) {
        state.items = state.items.filter((it) => it.id !== id);
      } else {
        existing.quantity = quantity;
      }
    },

    // optional convenience
    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
