import React, {useState} from 'react';
import './_slider.scss'
import prevIcon from '../../assets/images/prev.svg';
import nextIcon from '../../assets/images/next.svg';


function Slider({pictures, title}) {

  const [target, setTarget] = useState(0);
  // Target démarre à 0

  const next = () => {
    setTarget((target) => (target + 1) % pictures.length);
    // % pictures.length <= Modulo restant de division ex pour 5 images : (thisTarget=4+1)/5 reste 0, renvoit à l'image 0 
  };

  const prev = () => {
    setTarget((target) => (target - 1 + pictures.length) % pictures.length); // Ajout du total d'image et modulo ex pour 5 images (0-1 + 5)= 4 / 5 le modulo renvoit 4 ce qui renvoit à la dernière image
  };
  
  // Si plusieurs images => navigation
  if (pictures.length > 1) {
    return (
      <>
        <div className='car'>
          <img src={pictures[target]} alt={`${title} ${target + 1}`} />
          <div className='car__prev'>
            <img src={prevIcon} alt="Voir l'image précédente" onClick={prev}/>
          </div>
          <div className='car__next'>
            <img src={nextIcon} alt="Voir l'image suivante" onClick={next} />
          </div>
          <div className='car__count'>
            {target+1}/{pictures.length}
          </div>
        </div>
      </>
    )
  };

  // si une seule image
  return (
    <div className='car'>
      <img src={pictures[0]} alt={title} />
    </div>
  )
}

export default Slider;