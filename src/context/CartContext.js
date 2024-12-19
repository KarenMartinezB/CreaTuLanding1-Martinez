import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Agregar un libro al carrito
  const addToCart = (book) => {
    const existingBook = cart.find((item) => item.id === book.id);

    if (existingBook) {
      setCart(
        cart.map((item) =>
          item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  };

  // Eliminar un libro del carrito
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Vaciar el carrito
  const clearCart = () => {
    setCart([]);
  };

  // Obtener el total de la compra
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, getTotalPrice }}
    >
      {children}
    </CartContext.Provider>
  );
};
