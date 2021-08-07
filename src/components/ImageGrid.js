import React from 'react';
import { motion } from 'framer-motion';
import images from '../images/images';

const ImageGrid = ({ setSelectedImg }) => {
  // Temporary file for manually adding the photos. Future functionality to allow to add photos directly from the authenticated part of the app.
  const galleryImages = images;

  return (
    <div className='img-grid'>
      {galleryImages.map((img) => (
        <motion.div
          className='img-square'
          key={img.id}
          // change the opacity on hover with animation
          whileHover={{ opacity: 0.8 }}
          onClick={() => setSelectedImg(img.url)}
        >
          <motion.img
            src={img.url}
            // add alt tags in the images file
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
