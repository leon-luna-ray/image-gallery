import React from 'react';
import { motion } from 'framer-motion';

// add functionality to update alt text with user description
const Modal = ({ selectedImg, setSelectedImg }) => {
  // close the modal on click of the backdrop, modal will stay open if image is clicked
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <motion.div
      className='backdrop'
      onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt='larger-img'
        initial={{ y: '-100vh' }}
        animate={{ y: 0 }}
      />
    </motion.div>
  );
};

export default Modal;
