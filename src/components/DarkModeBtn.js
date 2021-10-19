import React from 'react';
import { Button } from 'react-bootstrap';
import useDarkMode from '../hooks/useDarkMode';

const DarkModeComponent = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div
      className='dark-mode-btn'
      onClick={() => setDarkMode((prevDarkMode) => !prevDarkMode)}
      style={{
        background: darkMode ? '#333' : '#fff',
        color: darkMode ? 'white' : 'black',
      }}
    >
      {darkMode ? 'Light ⬜️' : 'Dark ⬛️'}
    </div>
  );
};

export default DarkModeComponent;
