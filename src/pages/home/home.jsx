import React, {useEffect, useState} from 'react';
import BannerImg from '../../components/banner/banner.jsx';
import './home.scss';
import Card from '../../components/card/card.jsx';

function Home() {
  // Utilisation du hook useState avec [variable, setVariable] = useState([]); <= initialise la variable ([]) pour un tableau ou ('') ou (false) pour un booléen
  const [rentals, setRentals] = useState([]);

  // useEffect <= hook se lance au premier render et lance un nouveau render à chaque fois que les valeurs changent
  useEffect(() => {
    const fetchData = async () => {
      // '/' <= va par défaut dans public
      const response = await fetch('/json/logements.json');
      const data = await response.json(); 
      // Met à jour la valeur des rentals du useState avec les données réccupérées du json
      setRentals(data); 
    }
    fetchData();
  },[]); // []); indique qu'il n'y a pas de dépendance. ce qui veut dire que useEffect ne s'exécute qu'une seule fois lors du premier affichage il va chercher les éléments json puis s'arrête. S'il contenait [count] par exemple, il se réexécuterait à chaque fois que la variable count changerait

  return (
    <div className='main'>
      <BannerImg />
      <div className='gallery'>
        {rentals.map((rental) => (
          // passe l'objet à l'enfant
          <Card key={rental.id} title={rental.title} image={rental.cover} id={rental.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;