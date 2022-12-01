import React, {useState} from "react";
import SelectList from "./SelectList";
// import axiosInstance from "../services/axios";

const AddProduct = ({addProduct}) => {


  const [name, setName] =  useState("");
  const [category_id, setCategory_id] =  useState("");
  const [price, setPrice] =  useState("");
  
  
  const handleChange = (e) => {
    if (e.target.id === 'name') {
      setName(e.target.value)
    } else if (e.target.id === 'category_id') {
      setCategory_id(e.target.value)     
    } else if (e.target.id === 'price') {
      setPrice(e.target.value)
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct({name, category_id, price});
    setName("")
    setCategory_id("")
    setPrice("")
  }
  return(
    <div className="container row justify-content-end">
      <p className="row justify-content-end">
        <button className="btn btn-primary col-md-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseAddProduct" aria-expanded="false" aria-controls="collapseAddProduct">
          Add Product
        </button>
      </p>
      <div className="collapse col-6" id="collapseAddProduct" >
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Name</label>
            <input className="form-control" type="text" name="name" id="name" value={name} required onChange={handleChange}/>
          </div>
          <div className="mb-3">
            <SelectList handleChange={handleChange}/>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="price">Price</label>
            <input className="form-control" type="text" name="price" id="price" value={price} required onChange={handleChange}/>
            </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
      </div>
    </div>
  )
}

export default AddProduct