import React from 'react'
import '../stylesheets/Die.css'

const Die = (props) => {

  const styles = {
    backgroundColor: props.isHeld? "#59E391" : "white"
  }

  return (
    <div className='die-grid' style={styles} onClick={props.holdDice}>
      <h2>{props.value}</h2>
    </div>
  )
}

export default Die;