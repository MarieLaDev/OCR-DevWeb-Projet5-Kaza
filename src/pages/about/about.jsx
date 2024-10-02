import React, {useEffect, useState} from 'react';
import BannerImg from '../../components/banner/banner.jsx';
import './about.scss'
import Collapse from '../../components/collapse/collapse.jsx'

function About() {
  // Utilisation de useState avec [variable, setDeVariable] = useState([]); <= initialise la variable
  const [type, setCollapses] = useState([]);

  // useEffect <= hook lance un render quand les valeurs changent
  useEffect(() => {
    const fetchData = async () => {
      // '/' <= va par défaut dans public
      const response = await fetch("/json/collapses.json");
      const data = await response.json(); 
      // Met à jour la valeur des collapses du useState
      setCollapses(data); 
    }
    fetchData();
  },[]);
  
  return (
    <div className='main about'>
      <BannerImg origin="about" />
      <div className='collapse-about'>
        {type.map((type) => (
            // passe l'objet à l'enfant
            <Collapse key={type.id} type={type} />
          ))}
      </div>
    </div>
  );
}

export default About;