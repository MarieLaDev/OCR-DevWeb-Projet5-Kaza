import React from 'react';
import './details.scss';
import Slider from '../../components/slider/slider';
import Collapse from '../../components/collapse/collapse';
import Tag from '../../components/tag/tag';
import Host from '../../components/host/host';

function Rental({clickedRental}) {
  const tags = clickedRental.tags;
  const description = {'title' : 'Description', 'description': clickedRental.description};
  const equipments = {'title' : 'Équipements', 'description' : clickedRental.equipments};

  return (
    <>
      <section className='carrousel'>
        <Slider key={clickedRental.id} rental={clickedRental} />
      </section>
      <section className='detail-rental'>  
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
          <div className='contain-host'>
            <Host host={clickedRental.host} />
            <div className='mediaRatingOrder-1'>RATING</div>
          </div>
        </div>
        <div className='collapse-detail'>
          <Collapse key={1} type={description} />
          <Collapse key={2} type={equipments} />
        </div>
      </section>
    </>
  );
}

export default Rental;