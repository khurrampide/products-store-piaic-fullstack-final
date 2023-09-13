import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  items: Array<any>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CounterState = {
  items: [],
  totalAmount: 0,
  totalQuantity:0
}

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtoCart: (state,actions:PayloadAction<any>) => {
      state.totalQuantity += actions.payload.quantity
    },
    removeFromCart: (state,actions:PayloadAction<any>) => {
      state.totalQuantity -= actions.payload.quantity
    },
    clearCart: (state) => {
      state = initialState
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const cartActions = counterSlice.actions

export default counterSlice.reducer