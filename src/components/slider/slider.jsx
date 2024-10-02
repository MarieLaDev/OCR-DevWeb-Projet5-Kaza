import React, {useState} from 'react';
import './_slider.scss'
import PrevIcon from '../../assets/images/prev.png';
import NextIcon from '../../assets/images/next.png';


function Slider({pictures, title}) {

  const [target, setTarget] = useState(0);
  // Target démarre à 0

  const next = () => {
    setTarget((target) => (target + 1) % pictures.length);
    // % pictures.length <= Modulo restant de division, ex pour 5 images : (target=4+1)=5/5 reste 0 =>  renvoit à la première image 
  };

  const prev = () => {
    setTarget((target) => (target - 1 + pictures.length) % pictures.length); // Ajout du total d'image et modulo, ex pour 5 images (target=0-1 + 5)= 4/5 le modulo renvoit 4 => renvoit à la dernière image
  };
  
  // Si plusieurs images => navigation
  if (pictures.length > 1) {
    return (
      <>
        <div className='car'>
          <img src={pictures[target]} alt={`${title} ${target + 1}`} />
          <div className='car__prev'>
            <img src={PrevIcon} alt="Voir l'image précédente" onClick={prev}/>
          </div>
          <div className='car__next'>
            <img src={NextIcon} alt="Voir l'image suivante" onClick={next} />
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