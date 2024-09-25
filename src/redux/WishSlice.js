import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

const WishSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList(state, action) {
      const itemExists = state.wishlistItems.find(
        (item) => item.id === action.payload.id
      );
      if (!itemExists) {
        state.wishlistItems.push(action.payload);
        localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
      }
    },
    removeFromWishList(state, action) {
      state.wishlistItems = state.wishlistItems.filter(
        (item) => item.id !== action.payload.id
      );
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
    clearWishList(state) {
      state.wishlistItems = [];
      localStorage.setItem("wishlistItems", JSON.stringify(state.wishlistItems));
    },
  },
});

export const { addToWishList, removeFromWishList, clearWishList } = WishSlice.actions;

export default WishSlice.reducer;
