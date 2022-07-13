/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../stylesheets/components/Meme.css'
import memesData from '../data/memesData';

function Meme() {

  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg"
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)


  function getNewMemeImg() {
    const memesArray = allMemeImages.data.memes;
    const randomNum = Math.floor(Math.random() * memesArray.length)
    setMeme(prevState => ({
      ...prevState,
      randomImage: memesArray[randomNum].url
    }))
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
      <img src={meme.randomImage} className='meme--image'/>
    </main>
  )
}

export default Meme;

