
import React from 'react';

const Search = ({ state, dispatch }) => {
  const handleInputChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const searchResults = state.allData.filter(item =>
      item.title.toLowerCase().includes(searchValue)
    );
    dispatch({
      type: "SetDataSearch",
      allDataSearch: searchResults
    });
  };

  return (
    <input
      className='Searchinp'
      type="text"
      placeholder="Search..."
      onChange={handleInputChange}
    />
  );
};

export default Search;
