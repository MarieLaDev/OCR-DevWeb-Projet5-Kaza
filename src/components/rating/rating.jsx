import React from "react";
import './rating.scss';

function Rating({rating}) {
  console.log("note : " + rating);

  const stars = [];
  
  for(let i = 1; i <= 5; i++) {
    if (i <= rating) stars.push(<i key={i} className="fa-solid fa-star"></i>);
    if (i > rating) stars.push(<i key={i} className="fa-solid fa-star grey"></i>);
  }

  return (
    <div className="rate">
      {stars}
    </div>
  )
}

export default Rating;