import React, { createContext, useState } from 'react';
import ResCard from './ResCard';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>  
      <CartContext.Provider value={{cart, addToCart, clearCart}}>
        {children}
      </CartContext.Provider>
    </div>
  );
};



