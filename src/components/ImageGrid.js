import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
  // Listen to the collection in the database and return it on snap from the custom hook
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <div className='image-grid'>
      {docs &&
        docs.map((doc) => (
          <div className='img-wrap' key={doc.id}>
            <h1>{doc.url}</h1>
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
