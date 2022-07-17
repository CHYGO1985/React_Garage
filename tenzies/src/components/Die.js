import React from 'react'
import '../stylesheets/Die.css'

const Die = (props) => {

  return (
    <div className='die-grid'>
      <h2>{props.value}</h2>
    </div>
  )
}

export default Die;