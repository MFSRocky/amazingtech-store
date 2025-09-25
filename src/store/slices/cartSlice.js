import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
    itemCount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
      
      state.itemCount += 1;
      state.total += product.price;
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      const existingItem = state.items.find(item => item.id === productId);
      
      if (existingItem) {
        state.total -= existingItem.price * existingItem.quantity;
        state.itemCount -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== productId);
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        const difference = quantity - existingItem.quantity;
        existingItem.quantity = quantity;
        state.itemCount += difference;
        state.total += existingItem.price * difference;
        
        if (quantity === 0) {
          state.items = state.items.filter(item => item.id !== id);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;