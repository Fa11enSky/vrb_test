import React from "react";

const SearchBar = ({ setQuery }) => {
  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div>
      <input onChange={handleInput} type="text" />
    </div>
  );
};

export default SearchBar;
