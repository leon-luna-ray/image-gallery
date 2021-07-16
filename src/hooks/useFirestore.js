import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collection) => {
  // Set docs state
  const [docs, setDocs] = useState();

  useEffect(() => {
    // This hook will fire when there is an update in the database with onSnapshot method
    const unsub = projectFirestore
      .collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        // Documents are the database entries for each image
        let documents = [];
        // Loop through each entry and push the data to the documents array
        snap.forEach((doc) => {
          // The spread operator will create key/value pairs for each item in the doc.data() and add the id
          documents.push({ ...doc.data(), id: doc.id });
        });
        // Set state to the documents array
        setDocs(documents);
      });
    // Cleanup function will clear the images when not in use
    return () => unsub();
  }, [collection]);

  // The hook will return the updated state coming from the entries in the database
  return { docs };
};

export default useFirestore;
