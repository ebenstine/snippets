import React from 'react';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

function Uploader() {

const uploadOptions = {
server: 'http://localhost:5000'
  }
  const s3Url = 'https://snippetsbucket.s3.amazonaws.com'
  const handleFinishedUpload = info => {
      console.log(info);
      console.log('Access at', info.publicUrl);
      uploadComplete(info.publicUrl);
  }
  return (
    <DropzoneS3Uploader
      onFinish={handleFinishedUpload}
      s3Url={s3Url}
      maxSize={1024 * 1024 * 5}
      upload={uploadOptions}
    />
  );
}
export default Uploader;