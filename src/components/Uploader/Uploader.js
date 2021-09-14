import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import  DropzoneS3Uploader from 'react-dropzone-s3-uploader';


const dropStyles = {
  width: "300px",
  height: "200px",
 
}




const Uploader = ({uploadComplete}) => {


    const [progress, setProgress] = useState(0);
    const [progressTitle, setProgressTitle] = useState('')

    
    const uploadOptions = {
    server: 'http://localhost:5000'
    }
    const s3Url = 'https://snippetsbucket.s3.amazonaws.com'
    const handleFinishedUpload = info => {
      console.log(info);
      console.log('Access at', info.fileUrl);
      uploadComplete(info.fileUrl);
  }
    const innerElement = (
        <div
            style={{paddingTop: '.25rem'}} >
            <Button>Click or Drag Files to Upload</Button>
            </div>
    )
  return (
    <DropzoneS3Uploader
      onError={(error) => console.log('upload failed', error)}
      onFinish={handleFinishedUpload}
      s3Url={s3Url}
      style={dropStyles}
      maxSize={1024 * 1024 * 5}
      upload={uploadOptions}
      accept="audio/*"
      children={innerElement} 
      
    />
  );
}

export default Uploader;