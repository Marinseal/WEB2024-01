import './Form.css';
import React, { useState, useCallback } from 'react';
import debounce from 'just-debounce-it';

export function Form({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const debouncedSearch = useCallback(
    debounce((value) => {
      onSearch(value); 
    }, 1000), 
    [onSearch]
  );

  const handleInputChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);
    debouncedSearch(value); 
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput); 
    setSearchInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <p>Search your GIF below!</p>
      </div>
      <div>
        <input
          value={searchInput}
          onChange={handleInputChange}
          placeholder="Search Gif"
          type="text"
        />
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}