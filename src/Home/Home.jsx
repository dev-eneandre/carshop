import React from 'react';
import Logo from '../assets/svg/Vector.svg';
import "./style.css";
import ArrowDown from "../assets/svg/ArrowDown.svg";
import Search from "../assets/svg/search.svg";
import Car from "../assets/png/car 1.png";
import ArrowUp from "../assets/svg/Arrow Up.svg";
import btn from "../assets/svg/btn.svg";

const Home = () => {

  let count = "0" + 1;

  return (
    <div className="home">
       
       <div className='home__nav'>
  <div className="home__nav__logo">
      <div className="home__nav__logo__wrap">
          <img src={Logo} alt="logo" />
      </div>
      <h4>carslot.</h4>
  </div>

  <div className="home__nav__right">
      <h4>ENG <img src={ArrowDown} alt="arrow"/></h4>
      <div className="home__nav__right__search">
            <img src={Search} alt="search" />
        </div>
    </div>   
  </div>

  {/* Carrr  */}

  <div className="home__mc">
      <div className="home__mc__price">
          <h4 className="home__mc__price__amt">
            $1,600,000
          </h4>
          <p>Las Vegas, NV</p>
      </div>
      <div className="home__mc__carwrap">
        <div className="home__mc__carwrap__shadow">
          
        </div>
        <img src={Car} alt="car" />
      </div>


      <div className="home__controls">
        <img src={ArrowUp} alt="icon" className="home__controls__up" />
        <h4>{count}</h4>
        <img src={btn} alt="icon" className='home__controls__down'/>
    </div>

  </div>

    <div className="home__footer">
       <div className="home__footer__wrap">
            <div className="home__footer__year">
                <div className="home__footer__year__value">
                  2020
                </div>
                <div className="home__footer__year__title">
                  Year
                </div>
            </div>
            <div className="home__footer__year">
                <div className="home__footer__year__value">
                  3,650
                </div>
                <div className="home__footer__year__title">
                  Mileage
                </div>
            </div>
       </div>
            <div className="home__footer__year">
                <div className="home__footer__year__value">
                  Mercedes-Benz
                </div>
                <div className="home__footer__year__title">
                  C-Class 2020
                </div>
            </div>

            <div className="home__footer__fullDetails">
              <h3>Full Details -{'>'} </h3>
            </div>
    </div>


    </div>
  )
}

export default Home