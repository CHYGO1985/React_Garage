import './App.css';
import logo from './logo.svg';
import React, {Component} from 'react';

/**
 * @jingejiejiang updated on Jul 2, 2019
 */
const DEFAULT_QUERY = 'redux';
// const DEFAULT_HPP = '100';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
// const PATH_BASE = 'https://hn.algolia111.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
// const PARAM_HPP = 'hitsPerPage=';

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

/* Add Table functional component */
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
      error: null,
      searchKey: '',
      results: null,
      searchTerm: DEFAULT_QUERY,
    };

    this.onDismiss = this.onDismiss.bind(this);
    this.onSearchSubmit = this.onSearchSubmit.bind(this);
    this.onSearchChange = this.onSearchChange.bind(this);
    this.setSearchTopStories = this.setSearchTopStories.bind(this);
    this.fetchSearchTopStories = this.fetchSearchTopStories.bind(this);
    this.needsToSearchTopStories = this.needsToSearchTopStories.bind(this);
  }

  needsToSearchTopStories(searchTerm) {
    return !this.state.results[searchTerm]
  }

  onSearchSubmit(event) {
    const { searchTerm } = this.state;
    this.setState({ searchKey: searchTerm });

    if (this.needsToSearchTopStories) {
      this.fetchSearchTopStories(searchTerm);
    }
    
    event.preventDefault();
  }

  setSearchTopStories(result) {
    // this.setState({ result });
    // result: the new search result, different from the this.state.result which is still the pre result
    const { hits, page } = result;
    const { searchKey, results } = this.state;

    const oldHits = results && results[searchKey]?
        results[searchKey].hits : [];
    const updatedHits = [ ...oldHits, ...hits ];

    this.setState({ 
      results: { 
        ...results,
        [searchKey]: { hits: updatedHits, page }
      }
     });
  }

  fetchSearchTopStories(searchTerm, page = 0) {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    const { searchTerm } = this.state;
    // setSate will not update this immediataly, it will update in the update lifecycle
    this.setState({ searchKey: searchTerm }); 
    this.fetchSearchTopStories(searchTerm);
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
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const updatedList = hits.filter(item => item.objectID !== id);
    this.setState({
      // result: { ...this.state.result, hits: updatedList}
      results: { 
        ...results,
        [searchKey]: { hits: updatedList, page }
      }
    });
  }
  
  ShowContent() {
    const { searchTerm, results, searchKey, error } = this.state;

    console.log(error);
    
    const page = (
      results &&
      results[searchKey] &&
      results[searchKey].page
      ) || 0;
    
    const list = (
      results &&
      results[searchKey] &&
      results[searchKey].hits
    ) || [];
    
    return (
      <div className="page">
        <header className="App-header">
          <div className="interactions">
            <Search 
              searchTerm = { searchTerm }
              onSubmit = { this.onSearchSubmit }
              onSearchChange = { this.onSearchChange }
            > Search </Search>
          </div>
          <br />
          { error
            ? <div className="interactions">
                <p>Something went wrong.</p>
            </div>
            : <Table list = { list } onDismiss = { this.onDismiss } /> 
          }
          <div className="interactions">
            <Button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
              More
            </Button>
          </div>
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
