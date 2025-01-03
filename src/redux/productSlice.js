import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productStatus: STATUS.IDLE,
  productDetail: [],
  productDetailStatus: STATUS.IDLE,
};

export const getProducts = createAsyncThunk("getProducts", async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
});

//apiden category'e göre ürünleri getirme
export const getCategoryProducts = createAsyncThunk(
  "getCategory",
  async (category) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const data = await response.json();
    return data;
  }
);

export const getProductDetail = createAsyncThunk(
  "productDetail",
  async (id) => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await response.json();
    return data;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state) => {
        state.productStatus = STATUS.LOADING;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productStatus = STATUS.SUCCESS;
      })
      .addCase(getProducts.rejected, (state) => {
        state.productStatus = STATUS.FAIL;
      })
      .addCase(getProductDetail.pending, (state) => {
        state.productDetailStatus = STATUS.LOADING;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.productDetail = action.payload;
        state.productDetailStatus = STATUS.SUCCESS;
      })
      .addCase(getProductDetail.rejected, (state) => {
        state.productDetailStatus = STATUS.FAIL;
      })
      .addCase(getCategoryProducts.pending, (state) => {
        state.productStatus = STATUS.LOADING;
      })
      .addCase(getCategoryProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.productStatus = STATUS.SUCCESS;
      })
      .addCase(getCategoryProducts.rejected, (state) => {
        state.productStatus = STATUS.FAIL;
      });
  },
});

export default productSlice.reducer;
