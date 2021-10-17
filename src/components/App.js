import React from 'react';
import Header from './Header';
import ImageGrid from './ImageGrid';
import images from './images';
import '../styles/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <ImageGrid images={images} />
    </div>
  );
};

export default App;
