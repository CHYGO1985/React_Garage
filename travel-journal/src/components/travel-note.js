/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../stylesheets/components/travel-note.css'

function TravelNote(props) {
  return (
    <div className = 'travel-note'>
      <img src = {props.imageUrl} className = 'location-photo' />
      <div className = 'location-info'>
        <img src = '/images/location-icon.png' className = 'location-icon'/>
        <p className = 'location-name'>{props.location}</p>
        <a href = {props.googleMapsUrl} className = 'location-map-link'>View on Google Map</a>
      </div>
      <div className = 'travel-description'>
        <h2 className = 'travel-description title'>{props.title}</h2>
        <p className = 'travel-date'><b>{props.startDate} - {props.endDate}</b></p>
        <p className = 'travel-description details'>
          {props.description} 
        </p>
      </div> 
    </div>
  )
}

export default TravelNote;