import { createContext, useState } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishList, setWishList] = useState([]) 

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  // console.log(addToCart);
  

  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev.filter((item) => item._id !== productId)
    );
  };

  const addToWishList = (product) => {
    setWishList(prev => [...prev, product])
  }
  // console.log('addToWishList: ',wishList);   
  

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, wishList, addToWishList }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
