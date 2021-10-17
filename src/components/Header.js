import React from 'react';
import DarkModeBtn from './DarkModeBtn';

const Header = () => {
  return (
    <header>
      <div className='d-flex justify-content-end' fluid>
        <DarkModeBtn id='dark-mode-btn' />
      </div>
      <h1 className='site-title'>Ray Luna</h1>
    </header>
  );
};

export default Header;
