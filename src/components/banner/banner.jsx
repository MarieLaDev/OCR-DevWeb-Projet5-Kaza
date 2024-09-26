import React from 'react';
import './style.scss'
import BanImg from '../../assets/images/BannerImg.png';

function BannerImg() {
  return (
    <div className="ban">
        <img className='ban__image' src={BanImg} alt="La côte - bannière" />
        <div className='ban__background'>Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default BannerImg;
