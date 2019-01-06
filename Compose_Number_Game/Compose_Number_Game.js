const Stars = (props) => {
  return (
    <div className="col-5">
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
      <i className="fa fa-star"></i>
    </div>
  );
};

const Button = (props) => {
  return (
    <div className="col-2"> {/* 2 cells for a column */}
       <button>=</button>
    </div>
  );
};

const Answer = (props) => {
  return (
    <div className="col-5">
      ...
    </div>
  );
};

const Numbers = (props) => {
    return (
  );
};

// Numbers.list = _.range(1, 10);

class Game extends React.Component {
  state = {
    selectedNumbers: [2, 4],
  };
  render() {
    return (
      <div className="container">
        <h3>Play Nine</h3>
        <hr />
        <div className="row">
        <Stars />
        <Button />
                <Answer />
        </div>
        <br />
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Game />
      </div>
    )
  }
}

ReactDOM.render(<App />, mountNode);