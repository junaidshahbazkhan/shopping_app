import { configureStore } from "@reduxjs/toolkit";
import productDataSlice from "./productDataSlice";

export const store = configureStore({
  reducer: {
    products: productDataSlice,
  },
});
