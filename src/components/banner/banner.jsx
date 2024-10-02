import React from 'react';
import './style.scss'
import BanImg from '../../assets/images/BannerImg.png';
import BanImgAbout from '../../assets/images/BannerImg2.png';

function BannerImg({origin}) {
  return (
    <div className="ban">
        <img className='ban__image' src={origin === 'home' ? BanImg : BanImgAbout} alt="La côte - bannière" />
        <div className='ban__background'>{origin ==='home' ? 'Chez vous, partout et ailleurs' : '' }</div>
    </div>
  );
}

export default BannerImg;
