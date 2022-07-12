import React from 'react';
import '../stylesheets/components/Meme.css'

function Meme() {
  function getNewImgClickHandler() {
    console.log("hello world")
  }

  return (
    <main className='meme-main'>
      <div className='meme-form'>
        <input 
          type='text' 
          placeholder='Top'
          className='meme-main-input'
        ></input>
        <input 
          type='text' 
          placeholder='Bottom'
          className='meme-main-input'
        ></input>
        <button className='meme-main-button' onClick={getNewImgClickHandler}>Get a new image</button>
      </div>
    </main>
  )
}

export default Meme;

