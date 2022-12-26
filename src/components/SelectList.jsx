import React, { useState, useEffect } from 'react'
import axiosInstance from '../services/axios'
  
const SelectList = ({handleChange}) => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    axiosInstance.get('/categories')
    .then(res => {
      setCategories(res.data)
    })
  }, [])

  

    return(
      <div>
        <label className="form-label" htmlFor="category_id">Category</label>
        <select className="form-select" aria-label="Select Categories"  defaultValue={'DEFAULT'}
          id = "category_id" onChange={handleChange} required>
          <option disabled value={'DEFAULT'}>Select Category</option>
            {categories.length ? (
              categories.map((category) => {
                return <option value={category.id} key = {category.id}>{category.name.toUpperCase()}</option>
              })
              ) : (
                <option disabled>You have no products category</option>
              )
            }
          </select>
        </div>
    )
}

export default SelectList