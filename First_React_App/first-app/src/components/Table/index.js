import './index.css';
import React from 'react';
import Button from '../Button';

const Table = ({ list, onDismiss }) => 
  <div className="table">
    {list.map(item => 
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

export default Table;