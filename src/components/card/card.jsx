import React from "react";
import './style.scss'

function Card({rental, onClick}) {
  return (
    <div key={rental.id} className='rental' onClick={onClick}>
      <img src={rental.cover} alt={rental.title} />
      <h2>{rental.title}</h2>
    </div>
  )
}

export default Card;