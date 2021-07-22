// import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const getStorage = () => {
  const storageRef = projectStorage.ref();
  storageRef.get().on('load', (files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });
};

export default getStorage;
