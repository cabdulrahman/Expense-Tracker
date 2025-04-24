import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search expense"
      value={searchTerm}
      onChange={({ target: { value } }) => setSearchTerm(value)}
      aria-label="Search expense"
    />
  );
};

export default SearchBar;
