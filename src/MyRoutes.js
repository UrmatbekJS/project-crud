import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import AddProductPage from "./pages/AddProductPage";
import EditProductPage from "./pages/EditProductPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";

const MyRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/add" element={<AddProductPage />} />
        <Route path="/edit/:id" element={<EditProductPage />} />
        <Route path="detail/:id" element={<ProductDetailsPage />} />
      </Routes>
    </div>
  );
};

export default MyRoutes;
