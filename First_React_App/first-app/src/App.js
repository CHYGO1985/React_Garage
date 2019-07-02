import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

/**
 * @jingejiejiang updated on Jul 2, 2019
 */
const DEFAULT_QUERY = 'redux';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';

// const list = [
//   {
//     title: 'React',
//     url: 'https://facebook.github.io/react/',
//     author: 'Jordan Walke',
//     num_comments: 3,
//     points: 4,
//     objectID: 0,
// }, {
//     title: 'Redux',
//     url: 'https://github.com/reactjs/redux',
//     author: 'Dan Abramov, Andrew Clark',
//     num_comments: 2,
//     points: 5,
//     objectID: 1,
// }, ];

// function App1() {
//   return (
//     <div className="App">
//       <header className="App-header">
//       {list.map(item => {
//         return (
//           <div> 
//             <span>
//               <a href={item.url}>{item.title}</a>
//             </span>
//             <span>{item.author}</span>
//             <span>{item.num_comments}</span>
//             <span>{item.points}</span>
//           </div> );
//           })}
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React JJ
//         </a>
//       </header>
//     </div>
//   );
// }

// is searched put it outside for reusable reason

const isSearched = searchTerm => item => item.title.toLowerCase().includes(searchTerm.toLowerCase());

// class Search extends Component {
//   render () {
//     const { searchTerm, onSearchChange, children } = this.props;
//     return (
//       <form>
//         {children} <input 
//           type="text" 
//           value={searchTerm}
//           onChange={onSearchChange}
//         />
//       </form>
//     );
//   }
// }

// class Table extends Component {
//   render () {
//     const { list, onDismiss, searchTerm } = this.props;
//     return (
//       <div>
//         {list.filter(isSearched(searchTerm)).map(item => {
//           return (
//             <div> 
//               <span>
//                 <a href={item.url}>{item.title}</a>
//               </span>
//               <span>{item.author}</span>
//               <span>{item.num_comments}</span>
//               <span>{item.points}</span>
//               <span>
//               <Button
//                 onClick={() => onDismiss(item.objectID)}
//                 type="button"
//               >
//                 Dismiss
//               </Button>
//             </span>
//           </div> );
//         })}
//       </div>
//     );
//   }
// }

/* Search funtional component */
const Search = ({ searchTerm, onSearchChange, children }) => 
  <form>
    {children} <input 
      type="text"
      value={searchTerm}
      onChange={onSearchChange}
    />
  </form>

/* Add Table functional component */
const Table = ({ list, onDismiss, searchTerm }) => 
  <div className="table">
    {list.filter(isSearched(searchTerm)).map(item => 
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

// class Button extends Component {
//   render () {
//     const {
//       onClick,
//       className = '',
//       children,
//      } = this.props;

//     return (
//       <button
//         onClick={ onClick }
//         className={ className }
//       >
//         {children}
//       </button>
//     );
//   }
// }

/* Refactoring Button as functional component */
const Button = ({ onClick, className, children }) =>
  <button
    onClick={onClick}
    className={className}
  >
    {children}
  </button>

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    };

    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
  }

  setSearchTopStories(result) {
    this.setState({ result });
  }

  componentDidMount() {
    const { searchTerm } = this.state;

    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => error);
  }

  // implicit binding for arrow function
  // onDismiss = (id) => {
  //   const updatedList = this.state.list.filter(item => item.objectID !== id);
  //   this.setState({ list: updatedList });
  // };

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  };

  onDismiss(id) {
    const updatedList = this.state.result.hits.filter(item => item.objectID !== id);
    this.setState({
      result: { ...this.state.result, hits: updatedList}
    });
  }
  
  ShowContent() {
    const { searchTerm, result } = this.state;
    if (!result) { return null; }
    return (
      <div className="page">
        <header className="App-header">
          <div className="interactions">
            <Search 
              searchTerm = { searchTerm }
              onSearchChange = { this.onSearchChange }
            > Search </Search>
          </div>
          <br />
          <Table 
            list = { result.hits }
            onDismiss = { this.onDismiss }
            searchTerm = { searchTerm }
          />
          <div>
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React JJ
            </a>
          </div>
        </header>
      </div>
    );
  }

  render() {
    return this.ShowContent(); 
  }
}

export default App;
