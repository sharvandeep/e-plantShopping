// src/components/CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increaseQty, decreaseQty, removeItem } from "../CartSlice";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Your Cart 🛒</h2>
      {cart.length === 0 && <p>No items in cart</p>}
      {cart.map((item) => (
        <div key={item.name} style={{ display: "flex", alignItems: "center", marginBottom: "10px", gap: "10px" }}>
          <img src={item.image} alt={item.name} width="60" />
          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
          </div>
          <button onClick={() => dispatch(decreaseQty(item))}>-</button>
          {item.quantity}
          <button onClick={() => dispatch(increaseQty(item))}>+</button>
          <button onClick={() => dispatch(removeItem(item))} style={{ color: "red" }}>🗑</button>
        </div>
      ))}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
}
