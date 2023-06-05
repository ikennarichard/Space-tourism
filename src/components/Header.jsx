import { NavLink } from "react-router-dom";
import s from './css/Header.module.css';
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [nav, setToggle] = useState('close');
  const elem = useRef()


    function toggleNav() {
      if (nav === 'close') {
        setToggle('open');
        elem.current.classList.add(`${s.open}`)
      } else {
        setToggle('close');
        elem.current.classList.remove(`${s.open}`)
      }
    }


  useEffect(() => {
    window.addEventListener('click', (e) => {
      if (nav === 'open' && e.target.id === 'nav_menu' 
      || e.target.id === 'nav_link') 
      {
        setToggle('close');
        elem.current.classList.remove(`${s.open}`);
      }
    })
  }, [nav])

  return (
    <header className={s.header}>
      <div>
        <img 
        src="/assets/shared/logo.svg" 
        alt="page logo" 
        className={s.logo}/>
      </div>


      <nav>
          {/* gray line */}
      <hr className={s.navline}/>
        <ul 
        className={s.list}
        ref={elem}
        id= 'nav_menu'
        >
          <li>
            <NavLink to='/' 
            style={({ isActive }) => ({ 
            borderBottomColor: isActive && "white",
            color: 'var(--clr-white)'
            
            })} id='nav_link' 
            >
              Home
          </NavLink>
          </li>

          <li>
          <NavLink 
          to='/destination' 
          style={({ isActive }) => ({ 
            borderBottomColor: isActive && "white",
            color: 'var(--clr-white)' 
            })} id='nav_link'
            >
          Destination
          </NavLink>
          </li>

          <li>
            <NavLink 
            to='/crew' 
          style={({ isActive }) => ({ 
            borderBottomColor: isActive && "white",
            color: 'var(--clr-white)'  
            })} id='nav_link'
            >
          Crew
          </NavLink>
          </li>
          
          <li>
            <NavLink to='/technology' 
            style={({ isActive }) => ({ 
              borderBottomColor: isActive && "white",
            color: 'var(--clr-white)'  
            })} id='nav_link'
            >
          Technology
          </NavLink>
          </li>
        </ul>

        <img 
        src={nav === 'close' ?
        '/assets/shared/icon-hamburger.svg'
        :
        '/assets/shared/icon-close.svg'
        } 
        alt="hamburger icon"
        className={s.hamburger} 
        onClick={() => toggleNav()}
        />

      </nav>
    </header>
  )
}
