import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import { motion } from 'framer-motion';
// the arguments are passed through JSX and deconstructed
const ProgressBar = ({ file, setFile }) => {
  // progress will be used to calculate % of the bar
  const { url, progress } = useStorage(file);

  // When the image URL is generated useEffect will reset the file to null in the JSX on the upload form which wil hide the progress bar.
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <motion.div
      className='progress-bar'
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    />
  );
};

export default ProgressBar;
