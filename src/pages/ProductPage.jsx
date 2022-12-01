import React, { useState, useEffect } from "react";
import Products from "../components/Products";
import AddProduct from "../components/AddProduct";
import axios from "../services/axios";

const ProductPage = () => {
  const [products, setProducts] = useState([])
  
  // componentDidMount(){
  //   this.updateProducs()
  // }
  useEffect(() => {
    updateProducs()
  });

  const updateProducs = () => {
    axios.get('/products')
    .then(res => {
      setProducts(res.data)
    }).catch((error) => {
      console.log(error);
    })
  }

  const deleteProduct = (id) => {
    axios.delete(`/products/${id}`)
    .then(res => {
      console.log(res.data);
      updateProducs()
    }).catch((error) => {
      console.log(error);
    })
  }

  const addProduct = (product) => {
    axios.post('/products', {...product})
    .then(res => {
      console.log(res.data);
      updateProducs()
    }).catch((error) => {
      console.log(error);
    })
  }

  return (
    <div>
    <h1 className="text-primary text-center">Products</h1>
        <Products products={products} deleteProduct={deleteProduct}/>
        <AddProduct addProduct={addProduct}/>
    </div>  
  )
}

export default ProductPage;

