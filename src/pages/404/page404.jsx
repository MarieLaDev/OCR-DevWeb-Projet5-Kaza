import React from 'react';
import './404.css'

function Page404() {
  return (
    <div className='color'>
      <p className='error'>404</p>
      <p className='oops'>Oups! La page que vous demandez n'existe pas.</p>
      <a href='../home/home.jsx'>Retourner sur la page d'accueil</a>
    </div>
  );
}

export default Page404;