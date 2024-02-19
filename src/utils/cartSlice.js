import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    userName: "",
  },
  reducers: {
    addUserName: (state,action) => {
      state.userName = action.payload;
    },
    removeUserName: (state) => {
      state.userName = null;
    },
    addItem: (state,action) => {
      state.items.push(action.payload);
    },
    removeItem: (state) => {
      state.items.pop();
    },
    clearCart: (state) => {
        state.items.length = 0;
    },
  },
})

export const { addItem, removeItem, clearCart,addUserName,removeUserName } = cartSlice.actions
export default cartSlice.reducer