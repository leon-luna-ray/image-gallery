import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
  // Listen to the collection in the database and return it on snap from the custom hook
  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <div className='' key={doc.id}>
            <img src={doc.url} alt='img' />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
