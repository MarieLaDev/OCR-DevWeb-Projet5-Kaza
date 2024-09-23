import React from "react";
import './style.css'

function Card({rental}) {
  return (
    <div key={rental.id} className='rental'>
      <img src={rental.cover} alt={rental.title} />
      <h2>{rental.title}</h2>
    </div>
  )
}

export default Card;