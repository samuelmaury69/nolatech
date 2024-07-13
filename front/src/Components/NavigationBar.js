import React from 'react';
import Logo from '../Assets/icongrab.png';

const NavigationBar = () => {
  return (
    <div className="headerNav">
      <img src={Logo} alt="grab" className="iconHeadernNav" />
      <div className="contentNavBody">
        <div className="routeNav">
          <a href="/home" className="route">Home</a>
          <a href="/" className="route">Login</a>
          <a href="/Register" className="route">Registrate</a>
          <a href="/List" className="route">Listado de usuarios</a>
          <a href="/" className="route">LOREM IPSUM</a>
          <a href="/" className="route">LOREM IPSUM</a>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
