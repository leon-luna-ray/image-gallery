import React from 'react';
import DarkModeBtn from './DarkModeBtn';

const Header = () => {
  return (
    <header>
      <DarkModeBtn id='dark-mode-btn' />

      <h1 className='site-title'>Ray Luna</h1>
    </header>
  );
};

export default Header;
