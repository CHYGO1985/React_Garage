import './index.css';
import React from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import SORTS from '../Sorts';

const Sort = ({ sortKey, onSort, children }) => 
  <Button 
    onClick={() => onSort(sortKey)}
    className="button-inline"
  >
    {children}
  </Button>

const Table = ({ 
  list, 
  sortKey,
  onSort,
  onDismiss,
  isSortReverse
}) => {
  const sortedList = SORTS[sortKey](list);
  const reverseSortedList = isSortReverse ? sortedList.reverse()
    : sortedList;

  return(
    <div className="table">
    <div className="table-header">
      <span style={{ width: '40%' }}>
        <Sort
          sortKey={ 'TITLE' }
          onSort={ onSort }
        >
          Title
        </Sort>
      </span>
      <span style={{ width: '30%' }}>
        <Sort
          sortKey={ 'AUTHOR' }
          onSort={ onSort }
        >
          Author
        </Sort>
      </span>
      <span style={{ width: '10%' }}>
        <Sort
          sortKey={ 'COMMENTS' }
          onSort={ onSort }
        >
          Comments
        </Sort>
      </span>
      <span style={{ width: '10%' }}>
        <Sort
          sortKey={ 'POINTS' }
          onSort={ onSort }
        >
          Points
        </Sort>
      </span>
      <span style={{ width: '10%' }}>
        Archieve
      </span>
    </div>  
      {sortedList.map(item => 
        <div key={item.objectID} className="table-row">
          <span>
            <a href={item.url}>{item.title}</a>
          </span>
          <span> Author: {item.author}</span>
          <span> Comments: {item.num_comments}</span>
          <span> Points: {item.points}</span>
          <span>
            <Button
              onClick={() => onDismiss(item.objectID)}
              type="button"
              className="button-inline"
            >
              Dismiss
            </Button>
          </span>
        </div>
      )}
    </div>
  );
}
  

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number,
    })
  ).isRequired,
  isSortReverse: PropTypes.bool,
  onSort: PropTypes.func.isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Table;