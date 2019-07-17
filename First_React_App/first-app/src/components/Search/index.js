import PropTypes from 'prop-types';
import React, { Component } from 'react';

// const Search1 = ({ searchTerm, onSearchChange, onSubmit, children }) => 
//   <form onSubmit={onSubmit}>
//     <input 
//       type="text"
//       value={searchTerm}
//       onChange={onSearchChange}
//     />
//     <button type="submit">
//       {children}
//     </button>
//   </form>

class Search extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }

  render() {
    const {
      searchTerm,
      onSearchChange,
      onSubmit,
      children
    } = this.props;

    return (
      <form onSubmit={onSubmit}>
        <input 
          type="text"
          value={searchTerm}
          onChange={onSearchChange}
          ref={(node) => { this.input = node; }}
        />
        <button type="submit">
          {children}
        </button>
      </form>
    );
  }
}

Search.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};

export default Search;