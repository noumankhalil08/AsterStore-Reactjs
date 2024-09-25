
// import { configureStore } from '@reduxjs/toolkit'
// import cartReducer from './CartSlice';
// import wishReducer from './WishSlice';

// export const store = configureStore({
//   reducer: {
//   cart : cartReducer,
//   wishlistItems: wishReducer

//   },
// })


import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import wishReducer from './WishSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishReducer, // corrected to wishlist
  },
});
