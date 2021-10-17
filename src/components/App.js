import React from 'react';
import Header from './Header';
import ImageGrid from './ImageGrid';
import DarkModeComponent from './DarkModeComponent';
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
      <DarkModeComponent />
      <Header />
      <ImageGrid data={data} />
    </div>
  );
};

export default App;
