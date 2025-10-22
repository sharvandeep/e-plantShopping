// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const cartCount = useSelector((state) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)
  );

  return (
    <header style={{ display: "flex", justifyContent: "space-between", padding: "1rem", background: "#4caf50", color: "#fff" }}>
      <Link to="/" style={{ textDecoration: "none", color: "white" }}>
        <h2>Paradise Nursery</h2>
      </Link>
      <Link to="/cart" style={{ textDecoration: "none", color: "white", fontSize: "18px" }}>
        🛒 Cart ({cartCount})
      </Link>
    </header>
  );
}
