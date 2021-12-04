//this component will be identical in function to Uploader but styled more appropriately

import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import RecordingsProgressBar from './RecordingsProgressBar';


const dropStyles = {
  width: "300px",
  height: "100px",
  //backgroundColor: '#2a4f64',
  //borderRadius: '3px',
  //border: '1px solid #c8ecf5',
  //boxShadow: '2px 2px 4px grey'
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
            style={{

                    paddingTop: '1.25em', 
                    paddingLeft: '1.5em', 
                    paddingRight: '1.5em',
                    
                    

                  }}
          
            >
            <Button variant="outlined" 
                    style={{

                      color: '#2a4f64', 
                      paddingLeft: '3em', 
                      paddingRight: '3em', 
                      border: '1px solid #3b95ac'
                      

                      }}
                  >Click to Add, or Drag and Drop File</Button>
            </div>
    )
  return (
    <div style={{ paddingTop: '2em'}}>
      
    <RecordingsProgressBar progress={progress} progressTitle={progressTitle} />
    
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