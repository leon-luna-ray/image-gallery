// // import { useState, useEffect } from 'react';
// import { projectStorage } from '../firebase/config';

// const getStorage = () => {
//   // working of docs to ge the images from the storage ref
//   const storageRef = projectStorage.ref();
//   const imagesRef = storageRef.child('images');

//   imagesRef.forEach((image) => {
//     const url = image.url;
//   });

//   return { url };
// };

// export default getStorage;
