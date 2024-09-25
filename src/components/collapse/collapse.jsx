import React, {useState} from 'react';
import './collapse.scss'

function Collapse({type}) {
  // isOpen <= état qui détermine si le contenu est visible ou non
  // setIsOpen <= fonction pour modifier isOpen
  // useState est initialisé à false
  const [isOpen, setIsOpen] = useState(false);

  // useState pour la rotation du bouton collapse
  const [isRotated, setIsRotated] = useState(false);
  
  // Inverse l'état isOpen et aussi isRotated (pour la flêche) à chaque clic sur le bouton
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);  
  };

  const descriptions = Array.isArray(type.description) 
    ? type.description 
    : [type.description];

  return (
    <div className='contain'>
      <div 
        className='contain__collapse' 
        onClick={toggleCollapse} // Appelle la "fonction" toggleCollapse au clic pour inverser son état
        data-target={type.id}>
          {type.title}
          <i className={`fa-solid fa-chevron-up ${isRotated ? 'openI' : 'closeI'}`}></i>
        </div>

      <div id={type.id} 
      className={`${isOpen ? 'collactive' : 'collhidden' }`}// Si isOpen est true classeName='collactive', sinon 'collhidden'
      >
        {descriptions.map((description, index) => (
          <p key={index}>{description}</p>
        ))}
      </div>
    </div>
  );
}

export default Collapse;