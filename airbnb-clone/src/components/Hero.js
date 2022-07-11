/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../stylesheets/components/Hero.css'

function Hero() {
  return (
    <section className='hero'>
      <img src='/images/photo-grid.png' alt='airbnb heros photo' className='hero-image' />
      <h1 className='hero-title'>
        Online Experience
      </h1>
      <p className='hero-description'>
        Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  )
}

export default Hero;