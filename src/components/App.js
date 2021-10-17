import React from 'react';
import ImageGrid from './ImageGrid';
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
      <ImageGrid data={data} />
    </div>
  );
};

export default App;
