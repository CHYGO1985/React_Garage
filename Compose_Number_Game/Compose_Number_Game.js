const Stars = (props) => {
  const numberOfStars = 1 + Math.floor(Math.random()*9);
  
  let stars = [];
  for (let i = 0; i < numberOfStars; i ++) {
    stars.push(<i key={i} className="fa fa-star"></i>)
  }
  
  return (
    <div className="col-5">
      {stars}
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
   <div className="card text-center">
      <div>
        <span>1</span>
        <span className="selected">2</span>
        <span className="used">3</span>
      </div>
    </div>
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
        <Numbers />
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