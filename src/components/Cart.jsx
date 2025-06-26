// import React from 'react'
// import { useSelector} from 'react-redux'
// import { BsFillCartXFill } from 'react-icons/bs';
// import { Link } from 'react-router-dom';
// import { FaArrowRight } from 'react-icons/fa';
// import CartList from './CartList';
// import CartPrice from './CartPrice';
// import { useEffect } from 'react';




// const Cart = () => {
  

// // const  cartItems = useSelector(state => state.addToCart?.list  || []);
// const cartItems = useSelector(state => state.addToCart?.list ?? []);


// //   let totalPrice = 0;
// //   totalPrice += CartList.originalPrice * CartList.quantity
// //   console.log(CartList); 

//   useEffect(() =>{
//    localStorage.setItem("thapaCart",JSON.stringify(cartItems));
//   },  [cartItems]);

//   let totalPrice = 0;
//   cartItems.forEach(item => {
//       if (item?.originalPrice && item?.quantity) {
//       totalPrice += item.originalPrice * item.quantity;
//     }
//   });
//   return (
//     <>
//  <div className="container pt-5 mt-5">
//         <div className="row">
//           {cartItems.length<=0 ? (
//              <>
//                <BsFillCartXFill className='text-secondary' style={{fontSize:'300px'}} />
//                <Link to='/' className='mt-5 text-decoration-none '>
//                   <h3>Click here to continue shopping <FaArrowRight /></h3>
//                </Link>
//              </>
//           ):(
//             <>
//             <div className="col col-lg-7 bg-dark overflow-y-scroll" style={{height:"500px"}}>
//             {
//               cartItems.map(item => (
//                 <CartList key={item.id} list={item} />
//               ))
//             }
//           </div>
//           <div className="col col-lg-2"></div>
//           <div className="col col-lg-3 text-secondary text-center">
//             <CartPrice list={cartItems}/>
//               <div className="btn btn-danger text-light px-5">Checkout</div>
//           </div>
//           </>
//           )}
          
//         </div>
//       </div>
//     </>
//   )
// }

// export default Cart




import { useSelector, useDispatch } from "react-redux";
import {remove, changeQuantity} from "../Redux/addCartReducer"
import React, { useEffect } from "react";
import store from "../Redux/store";
import CartList from "./CartList";
import CartPrice from "./CartPrice";
import './Style.css';




const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.addToCart.list);
  
// state = {
//   cartData: {
//     list: [],
//   }
// }

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  const handleQuantityChange = (id, e) => {
    const quantity = parseInt(e.target.value);
    dispatch(changeQuantity({ id, quantity }));
  };

  useEffect(() => {
  localStorage.setItem("thapaCart", JSON.stringify(cartItems));
}, [cartItems]);


  const calculateTotal = () =>
    cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cartData-container">
      <h2>Shopping Information</h2>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th> Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              {/* item = {item}
              onQuantityChange = {handleQuantityChange}
              OnRemove={handleRemove} */}
              <td>
                <img src={item.images?.[0]} alt={item.title} style={{width: '50px'}}/>
                {/* <div>
                  <strong>{item.name}</strong>
                  <p>Color: {item.color || "Default"}</p>
                  <p>Size: {item.size || "ONE SIZE"}</p>
                   <p>Total: Rs. {item.totalPrice !== undefined ? item.totalPrice.toFixed(2) : "0.00"}</p>
                </div> */}
              </td>
              <td>{item.title}</td>
              <td>Rs.{item.finalPrice}</td>
              <td>{item.quantity}</td>
              <td>Rs.{(item.quantity * item.finalPrice).toFixed(2)}</td>
              {/* <td> Total: Rs.{Number(item.totalPrice || 0).toFixed(2)}</td> */}
              <td>{item.title}</td>
              <td>
                <select
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                >
                  {[1, 2, 3, 4, 5].map((qty) => (
                    <option key={qty} value={qty}>
                      {qty}
                    </option>
                  ))}
                </select>
              </td>
              <td>Rs. {(item.finalPrice * item.quantity).toFixed(2)}</td>
              <td>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
};

export default Cart;


