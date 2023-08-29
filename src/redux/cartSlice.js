import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    itemList: [],
    totalQuantity: 0,
  },
  reducers: {},
})

export const cartActions = cartSlice.actions

export default cartSlice
