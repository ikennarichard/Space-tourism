/* eslint-disable react/prop-types */
import s from './css/Destination.module.css';
import { useState } from 'react';

export default function Destination({ data }) {
  const [index, setIndex] = useState(0);
  const { name, images, description, distance, travel } = data[index];

  return (
    <>
    <div className={s.wrapper}>

      <div className={s.image_wrapper}>
        <h2>
          <span className={s.count}>
            {`0${index+1}`}
          </span> 
          PICK YOUR DESTINATION
      </h2>
          <img
          src={images.png}
          alt={`a ${name} in the sky`}
          className={s.destination_image}/>
      </div>
    
    <div className={s.details}>
      <div className={s.btn_container}>
        {data.map((item, i) => (
          <a 
            type='button'
            onClick={() => setIndex(i)}
            key={item.name}
            style={{
              borderBottom: i === index && 
              '1px solid white'
            }}
            >
              {item.name}
          </a>
            
        ))}
        </div>

        <h2 className={s.planet_name}>{name}</h2>
        <p className={s.desc}>{description}</p>

        {/* hr line */}
        <hr className={s.line} />

        <div className={s.dist_time}>

          <div>
            <p style={{
              fontWeight: '100',
              fontSize: '0.9rem',
            }}>AVG.DISTANCE</p>
            <p className={s.dist}>{distance}</p>
          </div>

          <div>
            <p style={{
              fontWeight: '100',
              fontSize: '0.9rem',
            }}>EST. TRAVEL TIME</p>
            <p className={s.time}>{travel}</p>
          </div>

        </div>

      </div>
      
    </div>
    </>
  )
}
