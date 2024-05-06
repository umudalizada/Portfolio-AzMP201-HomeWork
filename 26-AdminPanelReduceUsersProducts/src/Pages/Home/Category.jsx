import React from 'react';

const Category = ({ state, dispatch }) => {
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    const filteredData = selectedCategory
      ? state.allData.filter(item => item.category === selectedCategory)
      : state.allData;
    dispatch({ type: "SetDataSearch", allDataSearch: filteredData });
  };

  return (
    <form className="form-container"> 
      <select
        id="categories"
        className="select-box" 
        onChange={(e)=>handleCategoryChange(e)}
      >
        <option value="">All Categories</option>
        <option value="jewelery">Jewelry</option>
        <option value="electronics">Electronics</option>
        <option value="women's clothing">Women's Clothing</option>
        <option value="men's clothing">Men's Clothing</option>
        <option value="kid's clothing">Kid's Clothing</option>
      </select>
    </form>
  );
};

export default Category;
