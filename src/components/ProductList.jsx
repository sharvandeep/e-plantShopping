// src/components/ProductList.jsx
import React from "react";
import plants from "../data/plants";
import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: "20px" }}>
      <h2>Our Plants 🌱</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "20px" }}>
        {plants.map((plant) => (
          <div key={plant.name} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <img src={plant.image} alt={plant.name} style={{ width: "100%", height: "180px", objectFit: "cover", borderRadius: "8px" }} />
            <h3>{plant.name}</h3>
            <p>${plant.price}</p>
            <button onClick={() => dispatch(addItem(plant))} style={{ background: "#4caf50", color: "white", padding: "5px 10px", border: "none" }}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
