/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "../stylesheets/components/Card.css"
      
export default function Card(props) {

  console.log(props.openSpots + " " + props.location)
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
  
  return (
    <div className = "card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src = {`/images/${props.coverImg}`} className = "card--image" />
        <div className = "card--stats">
            <img src = "/images/star.png" className = "card--star" />
            <span>{props.stats.rating}</span>
            <span className = "gray">({props.stats.reviewCount}) • </span>
            <span className = "gray">{props.location}</span>
        </div>
        <p>{props.title}</p>
        <p><span className="bold">From ${props.price}</span> / person</p>
    </div>
  )
}