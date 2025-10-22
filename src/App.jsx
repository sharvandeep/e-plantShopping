// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import CartPage from "./components/CartPage.jsx";

export default function App() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "20px" }}>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
    </>
  );
}
