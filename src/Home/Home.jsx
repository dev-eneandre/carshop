import React from 'react';
import Logo from '../assets/svg/Vector.svg';
import "./style.css";
import ArrowDown from "../assets/svg/ArrowDown.svg";
import Search from "../assets/svg/search.svg";

const Home = () => {
  return (
    <div className="home">
      <div className='home__nav'>
        <div className="home__nav__logo">
            <img src={Logo} alt="logo" />
            <h4>carslot.</h4>
        </div>

        <div className="home__nav__right">
            <div className="home__nav__right__lang">
              <h5>ENG <span><img src={ArrowDown} alt="arrow" /></span></h5>  
            </div>  
              <img className="home__nav__right__search" src={Search}  alt="search" />

        </div>        
      </div>
    </div>
  )
}

export default Home