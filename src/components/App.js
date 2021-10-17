import React from 'react';
import Header from './Header';
import ImageGrid from './ImageGrid';
import DarkModeBtn from './DarkModeBtn';
import '../styles/App.css';

const App = () => {
  const data = [
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
    'item',
  ];
  return (
    <div>
      <Header />
      <ImageGrid data={data} />
    </div>
  );
};

export default App;
