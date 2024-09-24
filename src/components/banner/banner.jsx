import React from 'react';
import './style.scss'
import BanImg from '../../assets/images/BannerImg.png';

function BannerImg() {
  return (
    <div className="ban">
        <img className='image' src={BanImg} alt="La côte - bannière" />
        <div className='background'>Chez vous, partout et ailleurs</div>
    </div>
  );
}

export default BannerImg;
