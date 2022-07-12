/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../stylesheets/components/travel-note.css'

function TravelNote() {
  return (
    <div className = 'travel-note'>
      <img src = '/images/profile.jpeg' className = 'location-photo' />
      <div className = 'location-info'>
        <img src = '/images/location-icon.png' className = 'location-icon'/>
        <p className = 'location-name'>Japan</p>
        <a href = 'https://www.google.com' className = 'location-map-link'>View on Google Map</a>
      </div>
      <div className = 'travel-description'>
        <h2 className = 'travel-description title'>Guilin Li River</h2>
        <p className = 'travel-date'><b>12 Jan, 2021 - 24 Jan 2021</b></p>
        <p className = 'travel-description details'>
          Software testing is the act of examining the artifacts and the behavior of the software 
          under test by validation and verification. Software testing can also provide an objective, 
          independent view of the software to allow the business to appreciate and understand the 
          risks of software implementation. 
        </p>
      </div>     
    </div>
  )
}

export default TravelNote;