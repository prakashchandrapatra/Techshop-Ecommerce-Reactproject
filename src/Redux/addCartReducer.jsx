// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   list: [], // ✅ must be defined
// };

// const addToCartSlice = createSlice({
//   name: 'addToCart',
//   initialState,
//   reducers: {
//     add: (state, action) => {
//       const existingItem = state.list.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.list.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     remove: (state, action) => {
//       state.list = state.list.filter(item => item.id !== action.payload);
//     },
//     clear: (state) => {
//       state.list = [];
//     },
//   },
// });

// export const { add, remove, clear } = addToCartSlice.actions;
// export default addToCartSlice.reducer;


import { createSlice } from '@reduxjs/toolkit';

// Load cart from localStorage initially
const loadCart = () => {
  try {
    const serializedCart = localStorage.getItem('thapaCart');
    return serializedCart ? JSON.parse(serializedCart) : [];
  } catch (e) {
    console.error("Failed to load cart from localStorage", e);
    return [];
  }
};

const savedCart = JSON.parse(localStorage.getItem("thapaCart")) || [];

// const initialState = {
//   list: savedCart,
// };


const initialState = {
  list: loadCart(),  // Load from localStorage on start
};

const addToCartSlice = createSlice({
  name: 'addToCart',
  initialState,
  reducers: {
    add: (state, action) => {
      if(!Array.isArray(state.list)){
        state.list = [];
      }
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
    clear: (state) => {
      state.list = [];
    },
    changeQuantity: (state, action) => {
      const item = state.list.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = Math.max(1, action.payload.quantity);  // Prevent quantity < 1
      }
    }
  },
});

export const { add, remove, clear, changeQuantity } = addToCartSlice.actions;
export default addToCartSlice.reducer;



// const addToCartSlice = createSlice({
//   name: "addToCart",
//   initialState,
//   reducers: {
//     add: (state, action) => {
//       const existingItem = state.list.find(item => item.id === action.payload.id);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.list.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     remove: (state, action) => {
//       state.list = state.list.filter(item => item.id !== action.payload);
//     },
//     changeQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       const item = state.list.find(item => item.id === id);
//       if (item) {
//         item.quantity = quantity;
//       }
//     },
//   },
// });

// export const { add, remove, changeQuantity } = addToCartSlice.actions;
// export default addToCartSlice.reducer;




// import { createSlice } from "@reduxjs/toolkit";

// // const savedCart = JSON.parse(localStorage.getItem("thapaCart")) || [];
// let savedCart = [];
// try {
//   const storedCart = localStorage.getItem("thapaCart");
//   if (storedCart && storedCart !== "undefined") {
//     savedCart = JSON.parse(storedCart);
//   }
// } catch (error) {
//   console.error("Failed to parse cart from localStorage:", error);
// }


// const addCartSlice = createSlice({
//     name: "addToCart",
//     initialState: {
//         list: savedCart,
//     },
    
//     reducers: {
//         add(state, action) {
//             const indexId = (state.list).findIndex(ele => ele.id === action.payload.id)
//             let quantity = action.payload.quantity ||1;
//             if(indexId >=0){
//                 state.list[indexId].quantity += quantity;
//                 console.log(quantity);
//             } else {
//                 state.list.push(action.payload)
//             }
//             // console.log(state.list[indexId]);
//         },
//         remove(state,action) {
//             state.list =  (state.list).filter(ele => ele.id !== (action.payload))
//         },
//         changeQuantity(state,action){
//             const quantity = action.payload.quantity;
//             const indexId = (state.list).findIndex(ele => ele.id === action.payload.id)
//             // console.log(state.list[indexId].quantity);
            
//             if(quantity>0){
//                 state.list[indexId].quantity = quantity;
//             } else{
//                 state.list =  (state.list).filter(ele => ele.id !== (action.payload.id))
//             }
//         }
//     }
// });

// export default addCartSlice.reducer
// export const { add, remove, changeQuantity } = addCartSlice.actions