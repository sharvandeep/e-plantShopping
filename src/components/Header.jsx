// src/components/Header.jsx
import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Header.css"; // optional, you can create this or ignore

export default function Header() {
  const cartItems = useSelector((state) => state.cart.items || []);
  // total number of items (sum of quantities)
  const totalItems = cartItems.reduce((sum, it) => sum + (it.quantity || 0), 0);

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 20px",
        background: "linear-gradient(90deg,#2e7d32,#66bb6a)",
        color: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 1000
      }}
    >
      <div>
        <Link to="/" style={{ color: "#fff", textDecoration: "none", fontWeight: "700", fontSize: "1.25rem" }}>
          Paradise Nursery
        </Link>
      </div>

      <nav style={{ display: "flex", gap: "18px", alignItems: "center" }}>
        <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>
          Home
        </Link>
        <Link to="/cart" style={{ color: "#fff", textDecoration: "none", position: "relative" }}>
          Cart 🛒
          {totalItems > 0 && (
            <span
              style={{
                display: "inline-block",
                minWidth: "22px",
                height: "22px",
                lineHeight: "22px",
                textAlign: "center",
                borderRadius: "999px",
                background: "#d32f2f",
                color: "#fff",
                fontSize: "0.85rem",
                marginLeft: "8px",
                padding: "0 6px"
              }}
            >
              {totalItems}
            </span>
          )}
        </Link>
      </nav>
    </header>
  );
}
