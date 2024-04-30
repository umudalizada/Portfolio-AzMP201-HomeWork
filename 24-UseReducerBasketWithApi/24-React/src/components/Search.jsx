import React, { useEffect, useRef } from 'react';

const Search = ({ dispatch, datas }) => {
  const inputValue = useRef();

  useEffect(() => {
    const handleInputChange = () => {
      const value = inputValue.current.value.trim();
      if (value !== '') {
        const filtered = datas.filter(item => item.name && item.name.toLowerCase().startsWith(value.toLowerCase()));
        dispatch({ type: "SetDatas", datas: filtered });
      } else {
        dispatch({ type: "SetDatas", datas: datas });
      }
    };
    inputValue.current.addEventListener('input', handleInputChange);
    return () => {
      inputValue.current.removeEventListener('input', handleInputChange);
    };
  }, [datas, dispatch]);

  return (
    <div>
      <input type="text" ref={inputValue} placeholder="Search..." />
    </div>
  );
};

export default Search;