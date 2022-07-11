/* eslint-disable jsx-a11y/alt-text */
import React from "react"
import "../stylesheets/components/Card.css"
      
export default function Card(props) {
  const { img, score, commentsCount, country, description, price } = props
  return (
    <div className = "card">
        <div className="card--badge">SOLD OUT</div>
        <img src = {`/images/${img}`} className = "card--image" />
        <div className = "card--stats">
            <img src = "/images/star.png" className = "card--star" />
            <span>{score}</span>
            <span className = "gray">({commentsCount}) • </span>
            <span className = "gray">{country}</span>
        </div>
        <p>{description}</p>
        <p><span className="bold">From ${price}</span> / person</p>
    </div>
  )
}