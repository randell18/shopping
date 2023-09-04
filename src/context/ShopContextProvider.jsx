import React, { createContext, useState } from 'react'
import { Products } from '../product';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i < Products.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
}

const ShopContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev, [itemId]: prev[itemId] + 1
    }))
  }
  const removeToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev, [itemId]: prev[itemId] - 1
    }))
  }
  const contextValue = {cartItems,addToCart,removeToCart}
  return (
    <ShopContext.Provider value={contextValue}>
      {children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider