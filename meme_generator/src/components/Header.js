/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import '../stylesheets/components/Header.css'

function Header() {
  return (
    <div className='header'>
      <img src='/images/troll-face.png' className='header-img'/>
      <h4 className='header-title'>Meme Generator</h4>
      <p className='header-description'>React Project</p>
    </div>  
  )
}

export default Header;