import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import ProgressBar from './ProgressBar';

const dropStyles = {
  width: "300px",
  height: "200px",
  backgroundColor: '#2a4f64',
  borderRadius: '3px',
  border: '1px solid',
  boxShadow: '7px 7px 10px grey'
  
  
  
}




const Uploader = ({uploadComplete}) => {


    const [progress, setProgress] = useState(0);
    const [progressTitle, setProgressTitle] = useState('')

    const handleFinishedUpload = info => {
      
      console.log(info);
      console.log('Access at', info.fileUrl);
      uploadComplete(info.fileUrl);

  }


    const onProgress = (percent, event) => {
      setProgress(percent);
      setProgressTitle(event);
    }

    
    const uploadOptions = {
    server: 'http://localhost:5000'
    }
    const s3Url = 'https://snippetsbucket.s3.amazonaws.com'
    
    
    
    const innerElement = (
        <div
            style={{paddingTop: '4em', paddingLeft: '1.5em', paddingRight: '1.5em'}}
            alignItems="center"
            >
            <Button variant="outlined" style={{color: 'snow', paddingLeft: '3em', paddingRight: '3em'}}>Click Here or Drag File to Upload</Button>
            </div>
    )
  return (
    <div style={{ paddingTop: '2em'}}>
    <ProgressBar progress={progress} progressTitle={progressTitle} />
    <DropzoneS3Uploader
      onError={(error) => console.log('upload failed', error)}
      onProgress={onProgress}
      onFinish={handleFinishedUpload}
      s3Url={s3Url}
      style={dropStyles}
      maxSize={1024 * 1024 * 100}
      upload={uploadOptions}
      accept="audio/*"
      children={innerElement} 
      
    />
    </div>
  );
}

export default Uploader;