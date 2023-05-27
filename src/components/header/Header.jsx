import './header.scss';
import React, { useEffect, useRef } from 'react';
import logo from '../../assets/movie-svgrepo-com.svg';
import { Link, useLocation } from 'react-router-dom';

const headerNav = [  {    display: 'Home',    path: '/',  },  {    display: 'Movies',    path: '/movie',  },  {    display: 'Tv Series',    path: '/tv',  },];

const Header = () => {
  const { pathname } = useLocation();
  const headerRef = useRef(null);
  const active = headerNav.findIndex((e) => e.path === pathname);
  useEffect(() => {
    const shrinkHeader = () => {
      if(document.body.scrollTop > 100 ||document.documentElement.scrollTop > 100){
        headerRef.current.classList.add('shrink');
      }else{
        headerRef.current.classList.remove('shrink');
      }
    }
    window.addEventListener('scroll', shrinkHeader);
    return () => {
      window.removeEventListener('scroll',shrinkHeader)
    };
  },[])
  return (
    <div ref={headerRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <img src={logo} alt="logo" />
          <Link to="/">tMovies</Link>
        </div>
        <ul className="header__nav">
          {headerNav.map((e, i) => (
            <li key={i} className={`${i === active ? 'active' : ''}`}>
              <Link to={e.path}>{e.display}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;