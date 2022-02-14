//only different from other uploaders because what it's asking for is an image
//everything else can be copied

import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import DropzoneS3Uploader from 'react-dropzone-s3-uploader';
import ChordDiagramsProgressBar from './ChordDiagramsProgressBar';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  dropZone: {

    color: '#233d4d', 
    paddingLeft: '3em', 
    paddingRight: '3em', 
    border: '1.5px solid #3b95ac',
    
    background: '#82bdcc',
    '&:hover': {
      border: '1.5px solid #233d4d',
      background: '#5fbdd4'
    }

    }



}));


const dropStyles = {
  width: "300px",
  height: "130px",
  //backgroundColor: '#2a4f64',
  borderRadius: '3px',
  border: '0px white',
  boxShadow: '1px 1px 4px rgb(112, 111, 111)',
  background: 'rgb(199, 246, 252)'
}




const Uploader = ({uploadComplete}) => {


    const [progress, setProgress] = useState(0);
    const [progressTitle, setProgressTitle] = useState('')
    const { dropZone } = useStyles();
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
            <Button 
              
              variant="outlined" 
              className={dropZone}
            >
              
              Click to Add, or Drag and Drop Chord Diagram
            
            </Button>

        </div>
    )
  return (
    
    <div style={{ paddingTop: '2em'}}>
      
      <ChordDiagramsProgressBar 
        
        progress={progress} 
        progressTitle={progressTitle} 
      
      />
    
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