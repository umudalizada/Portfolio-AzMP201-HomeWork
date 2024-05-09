import React, { useContext, useState } from 'react';
import { ProductContext } from '../../Context/ProductContext';

const Category = () => {
  const { allDataSearch, SetallDataSearch, allData } = useContext(ProductContext);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    const filteredData = category
      ? allData.filter(item => item.category === category)
      : allData;
    SetallDataSearch(filteredData);
  };

  return (
    <form className="form-container"> 
      <select
        id="categories"
        className="select-box" 
        value={selectedCategory}
        onChange={handleCategoryChange}
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
