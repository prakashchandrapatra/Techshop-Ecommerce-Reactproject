// import { configureStore } from '@reduxjs/toolkit'
// import addToCartReducer from './addCartReducer' // adjust path if needed

// const store = configureStore({
//   reducer: {
//     addTocart: addToCartReducer,
//   },
// })

// export default store

import { configureStore } from '@reduxjs/toolkit';
import addToCartReducer from './addToCartSlice';

const store = configureStore({
  reducer: {
    addToCart: addToCartReducer,
  },
});

// Save to localStorage whenever cart changes
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem('thapaCart', JSON.stringify(state.addToCart.list));
  } catch (e) {
    console.error("Failed to save cart to localStorage", e);
  }
//   const state = store.getState();
// if (state.cartData?.list) {
//   localStorage.setItem('thapaCart', JSON.stringify(state.cartData.list));
// }

});

export default store;

