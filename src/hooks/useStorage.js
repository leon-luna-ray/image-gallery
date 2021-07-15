import { useState, useEffect } from 'react';
import { projectStorage } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);

    // on state change, a snapshot will be send providing the upload status
    storageRef.put(file).on(
      'state_changed',
      (snap) => {
        // calculate percentage downloaded based on snapshot
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        // update state to reflect current progress
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      // async function will await the download url once the upload is complete
      async () => {
        const url = await storageRef.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
