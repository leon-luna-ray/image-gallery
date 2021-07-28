import React, { useState } from 'react';
import Title from './components/Title';
// upload form to be added later as a private route
import UploadForm from './components/UploadForm';
import ImageGrid from './components/ImageGrid';
import Modal from './components/Modal';

// Axios code
// New process will use axios to get storage data, can then use that hopefully to destructure and get image URLs and other metadata?
//  possible link https://console.firebase.google.com/u/0/project/image-gallery-1ce58/storage/image-gallery-1ce58.appspot.com/files
// axios.get('https://PROJECT-NAME.firebaseio.com/users/' + user.uid + '.json?auth=DATABASE-SECRET')
// .then((response) => {
//   console.log(response)
// });

function App() {
  // state for modal display img onClick
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className='App'>
      <Title />
      <UploadForm />
      {/* pass state from ImageGrid to Modal */}
      <ImageGrid setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
