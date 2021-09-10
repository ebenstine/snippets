import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';

const Uploader = ({uploadComplete}) => {
    const [progress, setProgress] = useState(0);
    const [progressTitle, setProgressTitle] = useState('')

    const uploadOptions = {
    server: 'https://enigmatic-castle-06579.herokuapp.com '
    }
    const s3Url = 'https://snippetsbucket.s3.amazonaws.com'
    const handleFinishedUpload = info => {
      console.log(info);
      console.log('Access at', info.publicUrl);
      uploadComplete(info.publicUrl);
  }
    const innerElement = (
        <div
            style={{paddingTop: '.25rem'}} >
            <Button>Click or Drag Files to Upload</Button>
            </div>
    )
  return (
    <DropzoneS3Uploader

      onFinish={handleFinishedUpload}
      s3Url={s3Url}
      maxSize={1024 * 1024 * 5}
      upload={uploadOptions}
      accept="audio/*"
      children={innerElement}
      
    />
  );
}

export default Uploader;