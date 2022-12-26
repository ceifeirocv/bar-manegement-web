import React from "react";
import Products from "../components/Products";
import AddProduct from "../components/AddProduct";

const ProductPage = () => {

  return (
    <div className="overflow-auto">
    <h1 className="text-primary text-center">Products</h1>
        <AddProduct/>
        <Products/>
    </div>  
  )
}

export default ProductPage;

