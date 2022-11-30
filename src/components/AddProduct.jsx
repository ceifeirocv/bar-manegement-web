import React, {Component} from "react";
import SelectList from "./SelectList";
// import axiosInstance from "../services/axios";

class AddProduct extends Component {

  state = {
    name: '',
    category: '',
    price: ''
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]:e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addProduct(this.state);
    this.setState(
      {
        name: '',
        category: '',
        price: '',
      }
    )
  }
  render(){
    return(
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Name</label>
            <input className="form-control" type="text" name="name" id="name" value={this.state.name} required onChange={this.handleChange}/>
          </div>
          <div className="mb-3">
            <SelectList/>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="price">Price</label>
            <input className="form-control" type="text" name="price" id="price" value={this.state.price} required onChange={this.handleChange}/>
            </div>
          <button type="submit" className="btn btn-primary">Add Product</button>
        </form>
      </div>
    )
  }
}

export default AddProduct