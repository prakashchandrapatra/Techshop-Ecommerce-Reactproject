import { createSlice } from "@reduxjs/toolkit";


const savedCart = JSON.parse(localStorage.getItem("thapaCart") || '[]');

const initialState = {
  list : savedCart,
};

const addToCartSlice = createSlice({
  name: "addToCart",
  initialState,
  reducers: {
    add: (state, action) => {
      const existingItem = state.list.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    remove: (state, action) => {
      state.list = state.list.filter(item => item.id !== action.payload);
    },
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.list.find(item => item.id === id);
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },
    clear:(state) =>{
      state.list = [];
    },
  },
});

export const { add, remove, changeQuantity,clear } = addToCartSlice.actions;
export default addToCartSlice.reducer;
