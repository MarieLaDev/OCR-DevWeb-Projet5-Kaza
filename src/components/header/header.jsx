import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 
import './style.scss'
import Logo from '../logo/head/logoHead.jsx';

function Header() {
  const targetPage = useLocation();
  
  // Fonction pour déterminer si un lien est actif
  const isActive = (path) => targetPage.pathname === path;
  
  return (
      <header>
          <h1>
            <Logo />
          </h1>
          <div>
            <nav>
              <ul>
                <li className={isActive('/') ? 'active' : ''}>
                  <Link to="/">Accueil</Link>
                </li>
                <li className={isActive('/about') ? 'active' : ''}>
                  <Link to="/about">A Propos</Link>
                </li>
              </ul>
            </nav>
          </div>
          
      </header>
    );
}

export default Header;