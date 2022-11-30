import React, { Component } from "react";
import Products from "../components/Products";
import AddProduct from "../components/AddProduct";
import axios from "../services/axios";

class ProductPage extends Component {
  state = {
    products: [ ]
  }
  
  componentDidMount(){
    axios.get('/products')
    .then(res => {
      this.setState({
        products: res.data
      })
    })
  }
  deleteProduct = (id) => {
    const products = this.state.products.filter(product => {
      return product.id !== id
    })
    this.setState({
      products
    })
  }
  addProduct = (product) => {
    product.id = this.state.products.length ? this.state.products[this.state.products.length-1].id + 1 : 1
    let products = [...this.state.products, product]
    this.setState({
      products
    })
  }

  render(){
    return (
      <div>
      <h1 className="text-primary text-center">Products</h1>
         <Products products={this.state.products} deleteProduct={this.deleteProduct}/>
         <AddProduct addProduct={this.addProduct}/>
      </div>  
    )
  }
}

export default ProductPage;

