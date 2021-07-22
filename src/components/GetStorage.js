import React, { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const GetStorage = (file) => {
  // state for image urls
  // const [images, setImages] = useState(null);

  // Get a reference to the storage service, which is used to create references in your storage bucket

  // Create a storage reference from our storage service
  const storageRef = projectStorage.ref();
  console.log(storageRef);

  return <h1>storage test</h1>;
};

export default GetStorage;
