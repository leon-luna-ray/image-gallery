// import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const getStorage = (file) => {
  // state for image urls
  // const [images, setImages] = useState(null);

  // Get a reference to the storage service, which is used to create references in your storage bucket

  // Create a storage reference from our storage service
  const storageRef = projectStorage.ref();
  // useEffect(() => {
  //   const storageRef = projectStorage.ref(file.name);

  // }, [files])
};

export default getStorage;
