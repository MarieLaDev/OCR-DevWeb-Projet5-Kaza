import React from "react";
import { Link } from 'react-router-dom';
import './style.scss'

function Card({id, title, image}) {
  return (
    <Link to = {`/details/${id}`} className="rental">
      <img src={image} alt={title} />
      <h2>{title}</h2>
    </Link>
  )
}

export default Card;