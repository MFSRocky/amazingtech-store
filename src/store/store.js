import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";

const loadState = () => {
  try {
    const serializedCart = localStorage.getItem("cart");
    const serializedWishlist = localStorage.getItem("wishlist");

    const preloadedState = {};
    if (serializedCart) {
      preloadedState.cart = JSON.parse(serializedCart);
    }
    if (serializedWishlist) {
      preloadedState.wishlist = JSON.parse(serializedWishlist);
    }

    return Object.keys(preloadedState).length > 0 ? preloadedState : undefined;
  } catch {
    return undefined;
  }
};

const persisted = loadState();

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
  preloadedState: persisted,
});

store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem("cart", JSON.stringify(state.cart));
    localStorage.setItem("wishlist", JSON.stringify(state.wishlist));
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
});
