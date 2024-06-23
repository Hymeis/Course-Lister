import React, { useState } from 'react';
import { coreTags, pathwayTags } from '../consts/tags';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');
  const [selectedCoreTag, setSelectedCoreTag] = useState('');
  const [selectedPathwayTag, setSelectedPathwayTag] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    onSearch(inputValue, selectedCoreTag, selectedPathwayTag);
  };

  return (
    <form onSubmit={handleSearchClick}>
      <input
        type="text"
        placeholder="Search..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <select value={selectedCoreTag} onChange={e => setSelectedCoreTag(e.target.value)}>
        <option value="">Select Core Tag</option>
        {coreTags.map(tag => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
      <select value={selectedPathwayTag} onChange={e => setSelectedPathwayTag(e.target.value)}>
        <option value="">Select Pathway Tag</option>
        {pathwayTags.map(tag => (
          <option key={tag} value={tag}>{tag}</option>
        ))}
      </select>
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
