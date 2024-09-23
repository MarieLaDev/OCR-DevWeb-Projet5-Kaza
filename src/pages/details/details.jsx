import React, {useEffect, useState} from 'react';
import BannerImg from '../../components/banner/banner.jsx';
import './details.css'
import Card from '../../components/card/card.jsx'

function Apartment() {
  // Utilisation de useState avec [variable, setDeVariable] = useState([]); <= initialise la vairable
  const [rentals, setRentals] = useState([]);

  // useEffect <= hook lance un render quand les valeurs changent
  useEffect(() => {
    
  },[]);
  
  return (
    <div className='main'>
      <div className='detail'>
        {rentals.map((rental) => (
          // passe l'objet à l'enfant
          <Card key={rental.id} rental={rental} />
        ))}
      </div>
      <p>Ceci est la page Home</p>
    </div>
  );
}

export default Apartment;