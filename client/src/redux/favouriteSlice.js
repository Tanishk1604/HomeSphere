// src/redux/favouriteSlice.js
import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "favourites",
  initialState: [],
  reducers: {
    addToFavourites: (state, action) => {
      const exists = state.find((item) => item._id === action.payload._id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFromFavourites: (state, action) => {
      return state.filter((item) => item._id !== action.payload);
    },
  },
});

// ✅ Make sure you're exporting these correctly!
export const { addToFavourites, removeFromFavourites } = favouriteSlice.actions;
export default favouriteSlice.reducer;
