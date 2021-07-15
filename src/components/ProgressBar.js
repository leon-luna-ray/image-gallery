import React from 'react';
import useStorage from '../hooks/useStorage';

// the arguments are passed through JSX and deconstructed
const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage(file);
  console.log(progress, url);

  return (
    <div className='progress-bar'>
      <h1>Hello</h1>
    </div>
  );
};

export default ProgressBar;
