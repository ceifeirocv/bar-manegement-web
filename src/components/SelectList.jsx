import { Component } from 'react'
import axiosInstance from '../services/axios'
  
class SelectList extends Component {
  state = {
    categories: []
  }

  componentDidMount(){
    axiosInstance.get('/categories')
    .then(res => {
      this.setState({
        categories: res.data
      })
    })
  }

  

  render(){
    return(
      this.state.categories.length ? (
        <div>
          <label className="form-label" htmlFor="category">Category</label>
          <select defaultValue="0" className="form-select" aria-label="Select Categories" id = "category">
            <option value="0" disabled>Select Category</option>
            {this.state.categories.map((category) => {
              return <option value={category.id} key = {category.id}>{category.name.toUpperCase()}</option>
            })}
          </select>
        </div>
      ) : (
        <p className="text-center">You have no products categorie</p>
      )
    )
  }
}

export default SelectList