 /* eslint-disable */
import { createSlice } from '@reduxjs/toolkit'
import { Product, ProductsState, RateType } from 'state/types'
import { shuffle } from 'ultils/arrayUltils';
import fetchProducts from './fetchProducts'

const initialState: ProductsState = {
  nzdData: [],
  usdData: [],
  euroData: [],
};

export const productsSlice = createSlice({
  name: 'Products',
  initialState,
  reducers: {
    setNzdData: (state, action) => {
      state.nzdData = action.payload;
    },
    setUsdData: (state, action) => {
      state.usdData = action.payload;
    },
    setEuroData: (state, action) => {
      state.euroData = action.payload;
    },
  },
});

// Actions
export const { setNzdData, setUsdData, setEuroData } = productsSlice.actions;

// Thunks
export const fetchData = (dataType: RateType, ratio = 1) => async (dispatch) => {
  const res: Product[] = await fetchProducts()
  const products = [];
  shuffle(res).forEach((item) => {
    products.push({
      id: item.id,
      name: item.name,
      price: (item.price * ratio).toFixed(2),
      type: item.type,
      imageUrl: item.imageUrl,
      subImageUrl: item.subImageUrl
    });
  });
  switch (dataType) {
    case RateType.USD:
      dispatch(setUsdData(products));
      break;
    case RateType.EURO:
      dispatch(setEuroData(products));
      break;
    default: dispatch(setNzdData(products));
      break;
  }
};

export default productsSlice.reducer;
