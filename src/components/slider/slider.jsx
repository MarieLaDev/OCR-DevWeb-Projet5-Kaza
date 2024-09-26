import React, {useState} from 'react';
import './_slider.scss'
import prevIcon from '../../assets/images/prev.svg';
import nextIcon from '../../assets/images/next.svg';


function Slider({pictures, title}) {
  console.log("il y a : "+ pictures.length + " images");

  const [key, setKey] = useState(0);
  
  let navigationElem = null;

  const next = () => {
    setKey((key + 1 || 0) % pictures.length);
  };

  const prev = () => {
    setKey((key - 1 || pictures.length));
  };
  
  if (pictures.length > 1) {
    navigationElem = (
    <>
      <div className='car__prev'>
          <img src={prevIcon} alt="Voir l'image précédente" />
      </div>
      <div className='car__next'>
        <img src={nextIcon} alt="Voir l'image suivante" />
      </div>
      <div className='car__count'>
        ?/{pictures.length}
      </div>
    </>
    );
  };
  console.log(navigationElem);

  // l'utilisation de map permet de créer un index => voir pictures.map((picture, index)=>...
  return (
    <div className='car'>
      <div className='car__pict'>
        {pictures.map((picture, index) => (
          <img key={index} src={picture} alt={title} />
        ))}
        {navigationElem}
      </div>
    </div>
  )
}

export default Slider;