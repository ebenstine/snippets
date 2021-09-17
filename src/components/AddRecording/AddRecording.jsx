import React, { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Paper, TextField, Button, Typography, Select, FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import useStyles from './AddRecordingStyles';
import Uploader from '../Uploader/Uploader';


const AddRecording = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { root, inputs, paper, textField, cardContent, title } = useStyles();

  const [url, setUrl] = useState ('no file was dropped');
  const [newRecording, setNewRecording] = useState({
    
  });

  const enterNewRecording = (key) => (event) => {
    setNewRecording({ ...newRecording, [key]: event.target.value });
  };

  const handleSave = (event) => {
    event.preventDefault();
    dispatch({ 
      
      type: 'POST_NEW_RECORDING', 
      payload: newRecording
      
    });
   };

  console.log(newRecording);

  const uploadComplete = (fileUrl) => {
    console.log('fileUrl upload complete', fileUrl);
      setNewRecording({...newRecording, src: fileUrl})
  }

  const toUserHome = () => {
    history.push('/songsList')
}
  
  return (
    <div onDoubleClick={toUserHome}>
      <Paper className={paper} onDoubleClick={e => e.stopPropagation()} elevation={10}>
        <FormControl >
          <form className={root} onSubmit={handleSave} noValidate autoComplete="off" >
            <div className={cardContent}>
            <Typography variant = "h4" component="h5" className={title}>Add a Recording to this Song</Typography>
            <TextField
              label="Describe New Recording"
              onChange={enterNewRecording('description')}
              value={newRecording.description}
              multiline className={textField}
            />
            <Uploader 
                
            uploadComplete={uploadComplete}
              
            />
         
          
          <FormControl>
            <section>
            <Button variant="contained" onClick={toUserHome} className={inputs} > CANCEL </Button>
            <Button variant="contained" type="submit" className={inputs}> SAVE </Button>
            </section>
          </FormControl>
          
        </div>
      </form>
    </FormControl>
   </Paper>
  </div>
  );
}

export default connect() (AddRecording);
