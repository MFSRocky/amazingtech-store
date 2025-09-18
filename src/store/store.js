import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const loadState = () => {
  try {
    const s = localStorage.getItem("cart");
    if (!s) return undefined;
    return { cart: JSON.parse(s) };
  } catch {
    return undefined;
  }
};

const persisted = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: persisted,
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart));
  } catch (error) {
    console.error("Failed to save cart:", error);
  }
});
