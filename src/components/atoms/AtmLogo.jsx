
import React from 'react';
import Logo from '../../assets/Logo.svg';
import Ficha from '../../assets/Ficha.svg';

const AtmLogo = () => {
  return (
    <div id='loader'>
      <img className='ficha' src={Ficha} alt="Poker" />
      <img src={Logo} alt="Pragma" />
    </div>
  );
};

export default AtmLogo;


