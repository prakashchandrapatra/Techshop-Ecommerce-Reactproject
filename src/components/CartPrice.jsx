// import React from 'react'

// const CartPrice = ({list = []}) => {
// let originalPrice=0;
// let discountPrice=0;

// list.forEach(ele => {
// if(ele?.originalPrice && ele?.finalPrice && ele?.quantity){
//     originalPrice += ele.originalPrice * ele.quantity;
//     discountPrice += ele.finalPrice * ele.quantity;
// }
// })
// console.log(originalPrice);
//   return (
//     <div>
// <h4 className='mb-5'>Order Summary</h4>
//               <div className='border-bottom pb-4'>
//                 <div className='d-flex justify-content-between my-3'>
//                   <h4>Original Price</h4>
//                   <h4 className='text-light'>Rs. {originalPrice}</h4>
//                 </div>
//                 <div className='d-flex justify-content-between my-3'>
//                   <h4>Discount</h4>
//                   <h4 className='text-success'>- Rs. {originalPrice - discountPrice}</h4>
//                 </div>
//                 <div className='d-flex justify-content-between my-3'>
//                   <h4>Delivery</h4>
//                   <h4>Free</h4>
//                 </div>
//               </div>
//               <div className='d-flex justify-content-between my-3 text-light'>
//                   <h3>Total Price</h3>
//                   <h3>Rs. {discountPrice}</h3>
//               </div>
//     </div>
//   )
// }

// export default CartPrice

import React from 'react';

const CartPrice = ({ items }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1; // example 10% tax
  const total = subtotal + tax;

  return (
    <div className="cart-summary">
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax (10%): ${tax.toFixed(2)}</p>
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
};

export default CartPrice;
