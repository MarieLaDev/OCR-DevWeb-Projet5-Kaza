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
      try {
        const response = await fetch(`${process.env.PUBLIC_URL}/json/collapses.json`);
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des collapses');
        }
        const data = await response.json();
        setCollapses(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  
  return (
    <div className='main about'>
      <BannerImg />
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