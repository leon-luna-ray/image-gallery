import React from 'react';
import Title from './components/Title';
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';

function App() {
  return (
    <div className='App'>
      <Title />
      {/* upload form to be added later as a autenticated private route */}
      {/* <UploadForm /> */}
      <ImageGrid />
    </div>
  );
}

export default App;
