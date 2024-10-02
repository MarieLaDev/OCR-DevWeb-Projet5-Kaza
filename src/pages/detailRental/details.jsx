import React, {useState, useEffect} from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './details.scss';
import Slider from '../../components/slider/slider.jsx';
import Collapse from '../../components/collapse/collapse';
import Tag from '../../components/tag/tag';
import Host from '../../components/host/host';
import Rating from '../../components/rating/rating';

function Rental() {
  // Récupère l'élément id de l'url (voir router et Card)
  const {id} = useParams();

  // crée le useState du rental pour chercher l'élément dans la réponse du fetch
  const [rental, setRental] = useState(null);
  // Crée un état de chargement pour le fetch
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/json/logements.json");
      const data = await response.json();

      const foundRental = data.find(rental => rental.id === id);
      
      setRental(foundRental || null);
      setLoading(false); 
    };
    fetchData();
  }, [id]);

  if (loading) return <div>LOADING...</div>;
  if (!rental) return <Navigate to = "../*" />

  const { tags = [], title, location, description, equipments = [], host, pictures = [], rating } = rental;

  return (
    <>
      <section className='carrousel'>
        <Slider pictures={pictures} title={title} />
      </section>
      <section className='detail-rental'>
        <div className='detail'>
          <div className='detail__tit-loc-tag'>
            <div className='detail__tit-loc-tag__title'>{title}</div>
            <div className='detail__tit-loc-tag__loc'>{location}</div>
            <div className='detail__tit-loc-tag__tag'>
              {tags.map((tag, index) => (
                <Tag key={index} tag={tag} />
              ))}
            </div>
          </div>
          <div className='detail__contain-host'>
            <Host host={host} />
            <Rating rating={rating} />
          </div>
        </div>
        <div className='collapse-detail'>
          <Collapse type={{ title: 'Description', description }} />
          <Collapse type={{ title: 'Équipements', description: equipments }} />
        </div>
      </section>
    </>
  );
}

export default Rental;