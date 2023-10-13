import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/index"; // Correct import path
import ProductDetails from "./components/Product/productDetails";

function App() {
  return (
    <>
      <Header />
      <section>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/productdetails" element={<ProductDetails />} />
        </Routes>
      </section>
    </>
  );
}

export default App;
