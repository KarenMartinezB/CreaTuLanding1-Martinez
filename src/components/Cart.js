import React from "react";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Carrito</h2>
      {cart.length === 0 ? <p>El carrito está vacío</p> : (
        <>
          {cart.map(item => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </div>
          ))}
          <button onClick={clearCart}>Vaciar carrito</button>
        </>
      )}
    </div>
  );
};

export default Cart;
