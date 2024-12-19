import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import "../styles/Cart.css";

function Cart() {
  const { cart, removeFromCart, clearCart, getTotalPrice } =
    useContext(CartContext);

  return (
    <div className="cart-container">
      <h1>Tu carrito</h1>
      {cart.length === 0 ? (
        <p>Agrega un producto...</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: ${item.price * item.quantity}</p>
                  <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
                </div>
              </li>
            ))}
          </ul>
          <h2>Total: ${getTotalPrice()}</h2>
          <button onClick={clearCart} className="btn clear-cart">
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;
