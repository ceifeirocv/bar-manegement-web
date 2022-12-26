import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts, deleteProduct } from "../slice/productSlice";


const Products = () => {
  const products = useSelector(state => state.products.products)
  const error = useSelector(state => state.products.error)
  const [deleteProductStatus, setDeleteProductStatus] = useState("idle")
  const dispatch = useDispatch()

  const productStatus = useSelector(state => state.products.status)
  
  useEffect(() => {
    if(productStatus === 'idle'){
      dispatch(getProducts())
    }
  }, [productStatus, dispatch])

  const handleDelete = async (id) => {
    if (deleteProductStatus === "idle"){
      try {
        console.log(id);
        setDeleteProductStatus("pending")
        await dispatch(deleteProduct(id));
        dispatch(getProducts())
      } catch (error) {
        console.log(error);
      }finally{
        setDeleteProductStatus('idle')
      }
    } 
  }
  let productsList 
  if (productStatus === 'loading'){
    productsList = <div className="d-flex justify-content-center">
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  } else if (productStatus === 'succeeded') {
    productsList = 
    <table className="table products">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Category</th>
          <th scope="col">Price</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => {
          return (
          <tr key={product.id}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td><button className="btn btn-danger btn-sm" onClick={() => handleDelete(product.id)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
              </svg>
              </button></td>
          </tr>
          )
        })}
      </tbody>
    </table>
  }
  else if (productStatus === 'failed') {
    productsList = <div className="alert alert-danger" role="alert">{error.error}</div>
  }
  return (
      productsList
  )
}

export default Products;