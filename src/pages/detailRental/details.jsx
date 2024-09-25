import React from 'react';
import './details.scss';
import Slider from '../../components/slider/slider';
import Collapse from '../../components/collapse/collapse';
import Tag from '../../components/tag/tag';

function Rental({clickedRental}) {
  const tags = clickedRental.tags;
  const description = {'title' : 'Description', 'description': clickedRental.description};
  const equipments = {'title' : 'Équipements', 'description' : clickedRental.equipments};

  return (
    <>
      <section className='carrousel'>
        <Slider key={clickedRental.id} rental={clickedRental} />
      </section>
      <section className='rental'>
        <div className='detail'>
          <div className='detail__tit-loc-tag'>
            
            <div className='detail__tit-loc-tag__title'>
              {clickedRental.title}
            </div>
            
            <div className='detail__tit-loc-tag__loc'>{clickedRental.location}</div>
            
            <div className='detail__tit-loc-tag__tag'>{tags.map((tag, index) => (
              <Tag key={index} tag={tag}/>
            ))}
            </div>
          </div>
          <div>hôte</div>
        </div>    
        <div className='collap'>
          <div>
            <Collapse key={1} type={description} />
          </div>
          <div>
            <Collapse key={2} type={equipments} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Rental;