import React from "react";
import './rating.scss';

function Rating({rating}) {

  const stars = [];

  for (let i = 1; i <= 5; i++) {
    const classI = i <= rating ? "fa-solid fa-star" : "fa-solid fa-star grey";
    stars.push(<i key={i} className={classI}></i>);
  }

  return (
    <div className="rate">
      {stars}
    </div>
  )
}

export default Rating;