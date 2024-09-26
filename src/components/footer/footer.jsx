import React from 'react';
import LogoFoot from '../logo/foot/logoFoot.jsx';
import './style.scss'

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div className='logo-footer'>
          <LogoFoot />
        </div>
        <p>&copy; 2020 Kasa. All right reserved</p>
      </div>
    </footer>
  )
}

export default Footer;