import './styleFoot.css'
import KImgF from '../../../assets/logo/K-foot.png';
import HomeImgF from '../../../assets/logo/home-foot.png';
import SImgF from '../../../assets/logo/s-foot.png';
import AImgF from '../../../assets/logo/a-foot.png';

function LogoFoot() {
  return (
    <div className='logo-foot'>
      <img src={KImgF} className='capital-foot' alt='K de Kasa'/>
      <img src={HomeImgF} className='home-foot' alt='Maison du logo Kasa'/>
      <img src={SImgF} className='others-foot'alt='s de Kasa'/>
      <img src={AImgF} className='others-foot' alt='a de Kasa'/>
    </div>
  );
}

export default LogoFoot;