import React, {useState} from 'react';
import './collapse.scss'

function Collapse({type}) {
  // isOpen <= détermine si le contenu est visible ou non. Initialisé à false
  const [isOpen, setIsOpen] = useState(false);


  // Inverse l'état isOpen à chaque clic sur la flèche
  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  // Si description (pour les équipements) est un tableau alors descriptions reste tel quel, si ce n'est pas un tableau (string) alors crée un tableau pour le map plus loin
  const descriptions = Array.isArray(type.description) 
    ? type.description 
    : [type.description];

  return (
    <div className='collapse-container'>
      <div 
        className='collapse-container__head' 
        
        data-target={type.id}>
          {type.title}
          <div className="arrow">
            <i className={`fa-solid fa-chevron-up ${isOpen ? 'openI' : 'closeI'}`} onClick={toggleCollapse}></i>
          </div>
        </div>

        <div className={`collapsible ${isOpen ? 'collaps-opening' : 'collaps-closing'}`}>
          <div id={type.id} className="content">
            {descriptions.map((description, index) => (
              <p key={index}>{description}</p>
            ))}
          </div>
        </div>

    </div>
  );
}

export default Collapse;