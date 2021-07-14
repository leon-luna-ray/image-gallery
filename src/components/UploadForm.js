import React from 'react';

// The upload form may not be needed if uploading directly since there shouldn't be a need for authentication

const UploadForm = () => {
  const handleChange = (e) => {
    console.log('changed');
  };
  return (
    <div>
      <form>
        <input type='file' onChange={handleChange} />
      </form>
    </div>
  );
};

export default UploadForm;
