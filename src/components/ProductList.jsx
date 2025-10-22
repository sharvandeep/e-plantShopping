// src/components/ProductList.jsx
import React from "react";
import plants from "../data/plants.js";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../CartSlice.js";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items || []);

  const isInCart = (id) => !!cartItems.find((it) => it.id === id);

  return (
    <div style={{ padding: "24px", maxWidth: 1100, margin: "0 auto" }}>
      <h2 style={{ marginBottom: 12 }}>Our Plants 🌱</h2>

      {/* Optional categories header */}
      <div style={{ marginBottom: 12 }}>
        <strong>Categories:</strong> All — Indoor — Succulents — Hanging
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
        {plants.map((plant) => (
          <div key={plant.id} style={{ border: "1px solid #eee", padding: 12, borderRadius: 8, background: "#fff" }}>
            <div style={{ height: 150, overflow: "hidden", borderRadius: 6 }}>
              <img src={plant.image} alt={plant.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <h3 style={{ margin: "10px 0 6px" }}>{plant.name}</h3>
            <p style={{ margin: "0 0 8px" }}>${plant.price.toFixed(2)}</p>
            <button
              onClick={() => dispatch(addItem(plant))}
              disabled={isInCart(plant.id)}
              style={{
                background: isInCart(plant.id) ? "#9e9e9e" : "#388e3c",
                color: "#fff",
                padding: "8px 12px",
                border: "none",
                borderRadius: 6,
                cursor: isInCart(plant.id) ? "not-allowed" : "pointer"
              }}
            >
              {isInCart(plant.id) ? "Added" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
