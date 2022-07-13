/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../stylesheets/components/Meme.css'
import memesData from '../data/memesData';

function Meme() {

  const [memeImage, setMemeIamge] = React.useState()

  function getNewMemeImg() {
    const memesArray = memesData.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length)
    setMemeIamge(memesArray[randomNum].url)
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
        <button className='meme-main-button' onClick={getNewMemeImg}>Get a new meme image</button>
      </div>
      <img src={memeImage} className='meme--image'/>
    </main>
  )
}

export default Meme;

