import React from "react";
import css from './styles.module.css'
const SearchBar = ({ setQuery }) => {
  const handleInput = (e) => {
    setQuery(e.target.value);
  };

  return (
    <label className={css.inputWrapper}>
      <input onChange={handleInput} type="text" />
    </label>
  );
};

export default SearchBar;
