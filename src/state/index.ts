import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import productsReducer from './products'

const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    products: productsReducer,
  },
})

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
