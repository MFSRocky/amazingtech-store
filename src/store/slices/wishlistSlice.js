import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    toggleWishlist: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        // Remove item from wishlist
        state.items = state.items.filter((i) => i.id !== item.id);
      } else {
        // Add item to wishlist
        state.items.push(item);
      }
    },
  },
});

export const { toggleWishlist } = wishlistSlice.actions;

export const selectWishlistItems = (state) => state.wishlist.items;
export const selectIsItemInWishlist = (state, itemId) =>
  state.wishlist.items.some((item) => item.id === itemId);

export default wishlistSlice.reducer;