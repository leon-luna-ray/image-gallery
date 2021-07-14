import React, { useState } from 'react';

// The upload form may not be needed if uploading directly since there shouldn't be a need for authentication
const UploadForm = () => {
  // state set to null and will only update if one is selected
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  // Allowed image types
  const types = ['image/png', 'image/jpeg'];

  const handleChange = (e) => {
    // select only the first file if multiples are selected
    let selectedImg = e.target.files[0];
    // only set state if a file was selected and is an allowed file type
    if (selectedImg && types.includes(selectedImg.type)) {
      setFile(selectedImg);
      setError('');
    } else {
      setFile(null);
      setError('Please select a valid file type PNG or JPG');
    }
  };

  return (
    <div>
      <form>
        <input type='file' onChange={handleChange} />
        <div className='output'>
          {error && <div className='error'>{error}</div>}
          {file && <div className='file'>{file.name}</div>}
        </div>
      </form>
    </div>
  );
};

export default UploadForm;
