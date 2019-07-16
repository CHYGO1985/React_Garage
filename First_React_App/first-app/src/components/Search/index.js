import React from 'react';

const Search = ({ searchTerm, onSearchChange, onSubmit, children }) => 
  <form onSubmit={onSubmit}>
    <input 
      type="text"
      value={searchTerm}
      onChange={onSearchChange}
    />
    <button type="submit">
      {children}
    </button>
  </form>
 
export default Search;