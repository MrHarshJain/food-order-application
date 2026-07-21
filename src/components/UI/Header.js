import React from 'react'
import "./Header.css"
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div className='main-header'>
        <h1>ReactMeals</h1>

        <div className='cart-header'>
             <FaShoppingCart />
            <p className='my-cart-text'>Your Cart</p>
            <div className='cart-item-count'>0</div>
        </div>
    </div>
  )
}

export default Header