import React, { useState } from 'react';
import Title from './components/Title';
// upload form to be added later as a private route
// import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='App'>
      <Title />
      <ImageGrid setSelectedImg={setSelectedImg} />
      <Modal selectedImg={selectedImg} />
    </div>
  );
}

export default App;
