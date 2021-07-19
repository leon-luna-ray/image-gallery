import React from 'react';

// add functionality to update alt text with user description
const Modal = ({ selectedImg, setSelectedImg }) => {
  // close the modal on click of the backdrop, modal will stay open if image is clicked
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  };
  return (
    <div className='backdrop' onClick={handleClick}>
      <img src={selectedImg} alt='larger-img' />
    </div>
  );
};

export default Modal;
