import './styleHead.scss'
import KImg from '../../../assets/logo/K-head.svg';
import HomeImg from '../../../assets/logo/home-head.svg';
import SImg from '../../../assets/logo/s-head.svg';
import AImg from '../../../assets/logo/a-head.svg';

function Logo() {
  return (
    <div className='logo-head'>
      <img src={KImg} className='capital' alt='K de Kasa'/>
      <img src={HomeImg} className='home' alt='Maison du logo Kasa'/>
      <img src={SImg} className='others'alt='s de Kasa'/>
      <img src={AImg} className='others' alt='a de Kasa'/>
    </div>
  );
}

export default Logo;