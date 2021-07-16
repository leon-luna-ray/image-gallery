import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
  // Listen to the collection in the database and return it on snap from the custom hook
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <div className='image-grid'>
      <h1>Grid</h1>
    </div>
  );
};

export default ImageGrid;
