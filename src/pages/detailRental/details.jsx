import React from 'react';
import './details.scss'
import Slider from '../../components/slider/slider'

function Rental({clickedRental}) {

  return (
    <>
      <section className='carrousel'>
        <Slider key={clickedRental.id} rental={clickedRental} />
      </section>
      <section className='detail'>
        <div className='detail__tit-loc-tag'>
          <div className='detail__tit-loc-tag__title'>
            {clickedRental.title}
          </div>
        </div>
        <div>hôte</div>
      </section>    
      <p>Ceci est la page du logement</p>
    </>
  );
}

export default Rental;