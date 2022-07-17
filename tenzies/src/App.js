import './App.css';
import React from 'react'
import Die from '../../tenzies/src/components/Die';
import Constants from './utils/Constants';

function App() {
  const [dice, setDice] = React.useState(getDieArray())
  
  function getDieArray() {
    const dieArray = [];

    for (let idx = 0; idx < Constants.DEFAULT_DIES_NUM; idx ++) {
      dieArray[idx] = Math.ceil(Math.random() * 6);
    }

    return dieArray;
  }

  const dieComponents = dice.map((die, idx) => (
      <Die value={die} key={idx}/>
    )
  )

  return (
    <div className='main'>
      <div className="dice-panel">
        {dieComponents}
      </div>
    </div>
  );
}

export default App;
