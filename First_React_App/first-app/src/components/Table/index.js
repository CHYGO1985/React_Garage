import './index.css';
import React, { Component } from 'react';
import Button from '../Button';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import SORTS from '../Sorts';

const Sort = ({ sortKey, onSort, children, activeSortKey }) => {
  const sortClass = classNames(
    'button-inline',
    { 'button-active': sortKey === activeSortKey }
  );

  return (
    <Button 
      onClick={() => onSort(sortKey)}
      className={ sortClass }
    >
      {children}
    </Button>
  );
}

const updateSortKey = (sortKey) => prevState => {

  const { isSortReverse: isSortReversePre, sortKey: sortKeyPre } = prevState;
  const isSameKey = sortKeyPre === "NONE"? false : sortKeyPre === sortKey;
  const isSortReverse = isSameKey && !isSortReversePre;

  return {
    sortKey, isSortReverse
  };
};

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sortKey: 'NONE',
      isSortReverse: false,
    };

    this.onSort = this.onSort.bind(this);
  }

  onSort(sortKey) {
    this.setState(updateSortKey(sortKey));
  }

  render() {

    const {
      list, 
      onDismiss,
    } = this.props;

    const {
      sortKey,
      isSortReverse
    } = this.state;

    const sortedList = SORTS[sortKey](list);
    const reverseSortedList = isSortReverse ? sortedList.reverse()
      : sortedList;

    return (
      <div>
        <div className="table-header">
          <span style={{ width: '40%' }}>
            <Sort
              sortKey={ 'TITLE' }
              onSort={ this.onSort }
              activeSortKey={sortKey}
            >
              Title
            </Sort>
          </span>
          <span style={{ width: '30%' }}>
            <Sort
              sortKey={ 'AUTHOR' }
              onSort={ this.onSort }
              activeSortKey={sortKey}
            >
              Author
            </Sort>
          </span>
          <span style={{ width: '10%' }}>
            <Sort
              sortKey={ 'COMMENTS' }
              onSort={ this.onSort }
              activeSortKey={sortKey}
            >
              Comments
            </Sort>
          </span>
          <span style={{ width: '10%' }}>
            <Sort
              sortKey={ 'POINTS' }
              onSort={ this.onSort }
              activeSortKey={sortKey}
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
}

// const Table = ({ 
//   list, 
//   sortKey,
//   onSort,
//   onDismiss,
//   isSortReverse
// }) => {
//   const sortedList = SORTS[sortKey](list);
//   const reverseSortedList = isSortReverse ? sortedList.reverse()
//     : sortedList;

//   return(
//     <div className="table">
//     <div className="table-header">
//       <span style={{ width: '40%' }}>
//         <Sort
//           sortKey={ 'TITLE' }
//           onSort={ onSort }
//           activeSortKey={sortKey}
//         >
//           Title
//         </Sort>
//       </span>
//       <span style={{ width: '30%' }}>
//         <Sort
//           sortKey={ 'AUTHOR' }
//           onSort={ onSort }
//           activeSortKey={sortKey}
//         >
//           Author
//         </Sort>
//       </span>
//       <span style={{ width: '10%' }}>
//         <Sort
//           sortKey={ 'COMMENTS' }
//           onSort={ onSort }
//           activeSortKey={sortKey}
//         >
//           Comments
//         </Sort>
//       </span>
//       <span style={{ width: '10%' }}>
//         <Sort
//           sortKey={ 'POINTS' }
//           onSort={ onSort }
//           activeSortKey={sortKey}
//         >
//           Points
//         </Sort>
//       </span>
//       <span style={{ width: '10%' }}>
//         Archieve
//       </span>
//     </div>  
//       {sortedList.map(item => 
//         <div key={item.objectID} className="table-row">
//           <span>
//             <a href={item.url}>{item.title}</a>
//           </span>
//           <span> Author: {item.author}</span>
//           <span> Comments: {item.num_comments}</span>
//           <span> Points: {item.points}</span>
//           <span>
//             <Button
//               onClick={() => onDismiss(item.objectID)}
//               type="button"
//               className="button-inline"
//             >
//               Dismiss
//             </Button>
//           </span>
//         </div>
//       )}
//     </div>
//   );
// }
  

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
  sortKey: PropTypes.string,
  onSort: PropTypes.func,
  onDismiss: PropTypes.func.isRequired,
};

export default Table;