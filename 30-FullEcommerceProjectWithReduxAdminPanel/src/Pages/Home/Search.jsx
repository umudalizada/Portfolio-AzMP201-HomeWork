import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/UsersContext';
import { ProductContext } from '../../Context/ProductContext';

const Search = ({ state, dispatch }) => {
  const {allData, SetAllData, allDataSearch, SetallDataSearch}=useContext(ProductContext)
  const {allUser, SetAllUser, allUserSearch, SetAllUserSearch}=useContext(UserContext)

  const [isFocused, setIsFocused] = useState(false);

  const handleInputChange = (e) => {
    const searchValue = e.target.value.toLowerCase();
    const searchResults = allData.filter(item =>
      item.title.toLowerCase().includes(searchValue)
    );
    SetallDataSearch(searchResults)
    
    const searchResultsUser = allUser.filter(item =>
      item.userName.toLowerCase().includes(searchValue)
    );
    SetAllUserSearch(searchResultsUser)
  };

  const handleInputFocus = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`relative mb-4 `}>
      <input
        className={`Searchinp  px-4 py-2 rounded-full border ${isFocused ? 'border-green-400' : ''} focus:outline-none transition-all duration-300`}
        type="text"
        placeholder="Search..."
        onChange={handleInputChange}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <svg
        className="absolute right-3 top-3 h-5 w-5 text-gray-400 transition-all duration-300"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
  );
};

export default Search;
