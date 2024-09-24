import React from 'react';
import './slider.scss'
import prevIcon from '../../assets/images/prev.svg';
import nextIcon from '../../assets/images/next.svg';


function Slider({rental}) {
  const pictures = rental.pictures
  
  if (!pictures || !rental) {
    return <div>Aucune image disponible</div>;
  }
  ;
  
  return (
    <>
      <div className='car__pict'>
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={rental.title} />
        ))}
        <div className='car__prev'>
          <img src={prevIcon} alt="Voir l'image précédente" />
        </div>
        <div className='car__next'>
          <img src={nextIcon} alt="Voir l'image suivante" />
        </div>
        <div className='car__count'>
          1/{pictures.length}
        </div>
      </div>
    </>
  )
}

export default Slider;