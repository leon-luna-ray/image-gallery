import React from 'react';

const Modal = ({ selectedImg }) => {
  return (
    <div>
      <img src={selectedImg} alt='lager-img' />
    </div>
  );
};

export default Modal;
