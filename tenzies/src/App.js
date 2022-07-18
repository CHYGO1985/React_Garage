import './App.css';
import React from 'react'
import {v4} from 'uuid'
import Confetti from 'react-confetti'
import Die from '../../tenzies/src/components/Die';
import Constants from './utils/Constants';

function App() {
  const [dice, setDice] = React.useState(getDieArray)
  const [tenzies, setTenzies] = React.useState(false)

  React.useEffect(() => {
    const allHeld = dice.every(die => die.isHeld)
    const firstValue = dice[0].value
    const allSameValue = dice.every(die => die.value === firstValue)
    if (allHeld && allSameValue) {
        setTenzies(true)
        console.log("You won!")
    }
  }, [dice])

  function generateNewDie() {
    return {
      value: Math.ceil(Math.random() * Constants.DICE_MAX_NUM),
      isHeld: false,
      id: v4()
    }
}
  
  function getDieArray() {
    const dieArray = [];

    for (let idx = 0; idx < Constants.DEFAULT_DIES_NUM; idx ++) {
      dieArray.push(generateNewDie())
    }

    return dieArray;
  }

  function holdDice(id) {
    setDice(prevState => prevState.map(die => {
      return die.id === id?
        {...die, isHeld: !die.isHeld } : die
    }))
  }

  const dieComponents = dice.map(die => (
      <Die 
        value={die.value} 
        key={die.id} 
        isHeld={die.isHeld}
        holdDice={() => holdDice(die.id)}
      />
    )
  )

  function rollDice() {
    if (tenzies) {
      setTenzies(false)
      setDice(getDieArray)
    } else {
      setDice(prevState => prevState.map(die => {
        return die.isHeld?
          die : generateNewDie()
      }))
    }
  }

  return (
    <div className='main'>
      <h1 className="title">Tenzies</h1>
      <p className="instructions">Roll until all dice are the same. Click each die 
        to freeze it at its current value between rolls.</p>
      <div className="dice-panel">
        {dieComponents}
      </div>
      <button 
        className='roll-dice-btn' 
        onClick={rollDice}
      >
        {tenzies? 'New Game' : 'Roll'}
      </button>
      {tenzies && <Confetti />}
    </div>
  );
}

export default App;
