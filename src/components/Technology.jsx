/* eslint-disable react/prop-types */
import s from './css/Technology.module.css';
import { useState } from 'react';

export default function Technology({ data }) {
  const [index, setIndex] = useState(0);
  const { name, images, description } = data[index];

  return (
    <div className={s.wrapper}>
      
      <h2>
          <span
          className={s.count}>
            {`0${index+1}`}
          </span>
          SPACE LAUNCH 101
        </h2>

      <div className={s.details_container}>
        <div className={s.desc_btn_wrapper}>
          <div className={s.btn_container}>

            {data.map((item, i) => (
              <button 
                key={crypto.randomUUID()}
                className={s.circle_selector}
                style={{
                  backgroundColor: i === index ? 
                  'white' : 'transparent',
                  color: i === index ? 'black' : 'white',
                  border: i === index ? 'none' : '1px solid gray',
                  }}
                onClick={() => setIndex(i)}
              >
                {i+1}
              </button>
            ))}
          </div>

          <section className={s.desc_wrapper}>
            <span className={s.terminology}>THE TERMINOLOGY...</span>

            <h2 className={s.title}>{name}</h2>
            <p className={s.desc}>{description}</p>

          </section>
        </div>

      </div>

      <div className={s.image_container}>
        <picture>
          <source 
          media="(max-width: 992px)" 
          srcSet={images.landscape} />
          <img
          src={images.portrait}
          alt={`A ${name}`}
          />
        </picture>
      </div>
    </div>
  )
}
