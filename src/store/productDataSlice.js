import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  singleProductData: [],
};

export const productDataSlice = createSlice({
  name: "productData",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.productData = action.payload;
    },
    setSingleProduct: (state, action) => {
      state.singleProductData = action.payload;
    },
    removeProduct: (state, action) => {
      state.productData = state.productData.filter(
        (pro) => pro.id !== action.payload
      );
    },
  },
});

export const { setProducts, setSingleProduct, removeProduct } =
  productDataSlice.actions;

export default productDataSlice.reducer;
