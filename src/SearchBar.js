import React from 'react';

function SearchBar({ filterText, onFilterTextChange }) {
  return (
    <form>
      <input
        type="text"
        placeholder="Search..."
        value={filterText}
        onChange={e => onFilterTextChange(e.target.value)}
      />
    </form>
  );
}

export default SearchBar;
