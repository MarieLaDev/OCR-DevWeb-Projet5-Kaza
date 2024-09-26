import React, {useState} from 'react';
import './collapse.scss'

function Collapse({type}) {
  // isOpen <= détermine si le contenu est visible ou non  initialisé à false
  const [isOpen, setIsOpen] = useState(false);

  // useState rotation du bouton collapse
  const [isRotated, setIsRotated] = useState(false);

  // Inverse l'état isOpen et aussi isRotated (pour la flêche) à chaque clic sur la flèche
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
    setIsRotated(!isRotated);
  };
  // console.log(isOpen + "< isOpen / isRotated >" + isRotated);

  const descriptions = Array.isArray(type.description) 
    ? type.description 
    : [type.description];

  return (
    <div className='contain'>
      <div 
        className='contain__coll' 
        
        data-target={type.id}>
          {type.title}
          <i className={`fa-solid fa-chevron-up ${isRotated ? 'openI' : 'closeI'}`} onClick={toggleCollapse}></i>
        </div>

      <div className='collapsible'>
        <div id={type.id} 
        className={`${isOpen ? 'collactive' : 'collhidden' }`}
        >
          {descriptions.map((description, index) => (
            <p key={index}>{description}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Collapse;