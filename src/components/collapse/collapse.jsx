import React, {useState} from 'react';
import './collapse.css'

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

  return (
    <>
      <button 
        className='collapse' 
        onClick={toggleCollapse} // Appelle la "fonction" toggleCollapse au clic pour inverser son état
        data-target={type.id}>{type.title}
          <i className={`fa-solid fa-chevron-up ${isRotated ? 'closeI' : 'openI'}`}></i>
        </button>

      <div id={type.id} 
      className={`${isOpen ? 'collactive' : 'collhidden' }`}// Si isOpen est true classeName='collactive', sinon 'collhidden'
      >
        {type.description}
      </div>
    </>
  );
}

export default Collapse;