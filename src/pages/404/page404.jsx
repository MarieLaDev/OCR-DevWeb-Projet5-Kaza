import React from 'react';
import { Link } from 'react-router-dom';
import './404.scss'

function Page404() {
  return (
    <div className='color'>
      <p className='error'>404</p>
      <p className='oops'>Oups! La page que vous demandez n'existe pas.</p>
      <Link to='/'>Retourner sur la page d'accueil</Link>
    </div>
  );
}

export default Page404;