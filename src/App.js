import React, { useState } from 'react';
import Title from './components/Title';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {
  // state for modal display img onClick
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='App'>
      <Title />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
