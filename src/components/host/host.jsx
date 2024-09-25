import React from 'react';
import './host.scss';

function Host({host}) {
  return (
    <div className='host'>
      <div className='host__name'>
        {host.name}
      </div>
      <img src={host.picture} className='host__img' alt={host.name} />
    </div>
  );
}

export default Host;