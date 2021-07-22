import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
  // Listen to the collection in the database and return it on snap from the custom hook

  const { docs } = useFirestore('images');
  console.log(docs);

  return (
    <div className='img-grid'>
      {docs &&
        docs.map((doc) => (
          <motion.div
            className='img-square'
            key={doc.id}
            // animate to the new position when image is added (layout)
            layout
            // change the opacity on hover with animation
            whileHover={{ opacity: 0.8 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img
              src={doc.url}
              // add functionality to get alt from user description
              alt='img'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              // add slight delay before loading image
              transition={{ delay: 0.5 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;
