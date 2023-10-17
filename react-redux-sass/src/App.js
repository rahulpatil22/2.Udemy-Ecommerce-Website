import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/index"; // Correct import path
import ProductDetails from "./components/Product/productDetails";
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Header />
      <section style={{marginTop:10}}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route exact path="/viewcart" element={<Cart/>}/>
        </Routes>
      </section>
    </>
  );
}

export default App;
