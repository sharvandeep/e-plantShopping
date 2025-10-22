// src/components/CartPage.jsx
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateQuantity, removeItem, clearCart } from "../CartSlice.js";
import { Link } from "react-router-dom";

export default function CartPage() {
  const cart = useSelector((state) => state.cart.items || []);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, it) => sum + it.quantity, 0);
  const totalCost = cart.reduce((sum, it) => sum + it.quantity * it.price, 0);

  return (
    <div style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
      <h2>Your Cart 🛒</h2>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/" style={{ color: "#1976d2" }}>
            Continue shopping
          </Link>
        </div>
      ) : (
        <>
          <div style={{ display: "grid", gap: 12 }}>
            {cart.map((item) => (
              <div key={item.id} style={{ display: "flex", gap: 12, alignItems: "center", border: "1px solid #eee", padding: 12, borderRadius: 6 }}>
                <img src={item.image} alt={item.name} style={{ width: 100, height: 80, objectFit: "cover", borderRadius: 4 }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600 }}>{item.name}</div>
                  <div>Unit price: ${item.price.toFixed(2)}</div>
                  <div>Subtotal: ${(item.price * item.quantity).toFixed(2)}</div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 6, alignItems: "center" }}>
                  <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                    <button
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                      style={{ padding: "6px 8px" }}
                    >
                      -
                    </button>
                    <div style={{ minWidth: 28, textAlign: "center" }}>{item.quantity}</div>
                    <button
                      onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                      style={{ padding: "6px 8px" }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                    style={{ background: "#d32f2f", color: "#fff", padding: "6px 8px", border: "none", borderRadius: 4 }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <div>Total items: <strong>{totalItems}</strong></div>
              <div>Total cost: <strong>${totalCost.toFixed(2)}</strong></div>
            </div>

            <div style={{ display: "flex", gap: 8 }}>
              <button
                onClick={() => alert("Checkout Coming Soon!")}
                style={{ background: "#1976d2", color: "#fff", padding: "8px 12px", border: "none", borderRadius: 6 }}
              >
                Checkout
              </button>

              <Link to="/" style={{ textDecoration: "none" }}>
                <button style={{ padding: "8px 12px", borderRadius: 6 }}>Continue Shopping</button>
              </Link>

              <button
                onClick={() => dispatch(clearCart())}
                style={{ background: "#9e9e9e", color: "#fff", padding: "8px 12px", border: "none", borderRadius: 6 }}
              >
                Clear Cart
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
