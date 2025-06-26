import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import Searching from '../components/Searching';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import SignIn from '../components/SignIn';
import { createSelector } from '@reduxjs/toolkit';

const NavBar = () => {

const [ setTotalQuantity] = useState(0)
    const selectCartList = state => state.cartData?.list || [];

const selectTotalQuantity = createSelector(
  [selectCartList],
  (list) => list.reduce((sum, item) => sum + item.quantity, 0)
);

const totalQuantity =  useSelector(selectTotalQuantity);

// const cartList = useSelector(state => state.cartData?.list || []);

// useEffect(() => {
//   let totalLength = 0;
//   cartList.forEach(item => {
//     totalLength += item.quantity || 0;
//   });
//   setTotalQuantity(totalLength);
// }, [cartList]);



  return (
    <>
<div className='bg-black fixed-top mb-5'>
 <nav className='navbar navbar-expand-lg bg-body-subtle'>
  <div className='container-fluid'>
   <Link to='/' className='navbar-brand'><h3 className='text-light'>Tech-Shop</h3></Link>
    <button className='navbar-toggle' type='button' data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls='navbarNav' aria-expanded="false" aria-label='Toggle navigation'>
     <span className='navbar-toggle-icon'></span>
    </button>
  </div>
  <Searching />
  <div>
    <Link to='/cart' className='text-decoration-none text-light d-flex'>
    <AiOutlineShoppingCart className='text-light fs-3' title='Cart' />
    <span>({totalQuantity})</span>
    </Link>
  </div>
  <div>
    <SignIn />
  </div>
 </nav>
</div> 
    </>
  )
}

export default NavBar
