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

  const [allMemeImages, setAllMemes] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.imgflip.com/get_memes")
      const data = await res.json()
      setAllMemes(data)
    }
    fetchData().catch(console.error)
  }, [])

  function getNewMemeImg() {
    const memesArray = allMemeImages.data.memes
    const randomNum = Math.floor(Math.random() * memesArray.length)
    setMeme(prevState => ({
      ...prevState,
      randomImage: memesArray[randomNum].url
    }))
  }

  function handleChagne(event) {
    const {name, value} = event.target
    setMeme(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  return (
    <main className='meme-main'>
      <div className='meme-form'>
        <input 
          type='text' 
          placeholder='Top'
          className='meme-main-input'
          name='topText'
          value={meme.topText}
          onChange={handleChagne}
        ></input>
        <input 
          type='text' 
          placeholder='Bottom'
          className='meme-main-input'
          name='bottomText'
          value={meme.bottomText}
          onChange={handleChagne}
        ></input>
        <button className='meme-main-button' onClick={getNewMemeImg}>Get a new meme image</button>
      </div>
      <div className='meme'>
        <img src={meme.randomImage} className='meme-image'/>
        <h2 className='meme-text top'>{meme.topText}</h2>
        <h2 className='meme-text bottom'>{meme.bottomText}</h2>
      </div>
    </main>
  )
}

export default Meme;

