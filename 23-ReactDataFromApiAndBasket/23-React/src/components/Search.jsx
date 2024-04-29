import React, { useEffect, useState } from 'react';

const Search = ({ initialDatas, datas, setDatas }) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (inputValue.trim() !== '') {
      const filtered = initialDatas.filter(item => item.name && item.name.toLowerCase().startsWith(inputValue.toLowerCase()));
      setDatas(filtered);
    } else {
      setDatas(initialDatas);
    }
  }, [inputValue, initialDatas, setDatas]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Search..." />
    </div>
  );
};

export default Search;
