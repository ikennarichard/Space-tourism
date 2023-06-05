/* eslint-disable react/prop-types */
import s from './css/Crew.module.css';
import { useState } from 'react';

export default function Crew({ data }) {
  const [index, setIndex] = useState(0);
  const { name, images, role, bio } = data[index];

  return (
    <>
    <div className={s.wrapper}> 
      <div className={s.crew_details}>

      <h2>
        <span className={s.count}>{`0${index+1}`}
        </span> 
        Meet your crew
      </h2>

      <div className={s.role_name}>
        <p className={s.role}>{role}</p>
        <p className={s.name}>{name}</p>
      </div>

      <p className={s.bio}>{bio}</p>

      <div className={s.circle_selector}>
        {data.map((item, i) => (
          <a 
          key={item.name} 
          role='button'
          onClick={() => setIndex(i)}
          className={s.crew_links}
          style={{
            backgroundColor: i === index ? 
            'white' : 'gray'
          }}
          >
          </a>
        ))}
      </div>
      </div>

      <div className={s.crew_image}>
        {/* image */}
        <img 
        src={images.png} 
        alt={`${name} behind a dark background`} 
        />
      </div>

    </div>
    </>
  )
}
