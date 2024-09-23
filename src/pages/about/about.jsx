import React, {useEffect, useState} from 'react';
import BannerImg from '../../components/banner/banner.jsx';
import './about.css'
import Collapse from '../../components/collapse/collapse.jsx'

function About() {
  // Utilisation de useState avec [variable, setDeVariable] = useState([]); <= initialise la variable
  const [type, setCollapses] = useState([]);

  // useEffect <= hook lance un render quand les valeurs changent
  useEffect(() => {
    const fetchData = async () => {
      // '/' <= va par défaut dans public
      const response = await fetch('/json/collapses.json');
      const data = await response.json(); 
      // Met à jour la valeur des collapses du useState
      setCollapses(data); 
    }
    fetchData();
  },[]);
  
  return (
    <div className='main'>
      <BannerImg />
      {type.map((type) => (
          // passe l'objet à l'enfant
          <Collapse key={type.id} type={type} />
        ))}
    </div>
  );
}

export default About;