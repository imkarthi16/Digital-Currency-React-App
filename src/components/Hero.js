import React from "react";
import Crypto from '../assets/hero-img.png';
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        {/* Left side */}
        <div className="left">
          <p>Buy % Sell Crypto 27/7 using your retirement account</p>
          <h1>Invest in cryptocurrency with IRA</h1>
          <p>Buy, sell, and store hundres of cryptocurrencies</p>
          <div className="input-container">
            <input type="email" placeholder="Enter your mail" />
            <button className="btn">Learn More</button>
          </div>
        </div>
        {/* Right side */}
        <div className="right">
          <div className="img-container">
            <img src={Crypto} alt="Crypto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
