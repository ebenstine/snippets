import React, { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Paper, TextField, Button, Typography, Select, FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import useStyles from './AddSongStyles'
import Uploader from '../Uploader/Uploader';


const AddSong = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { root, inputs, paper, textField, cardContent, title } = useStyles();
  //const { handleSubmit, reset, register } = useForm();
  const [url, setUrl] = useState ('no file was dropped');
  const [newSong, setNewSong] = useState({

  });

  const enterNewSong = (key) => (event) => {
    setNewSong({ ...newSong, [key]: event.target.value });
  };

  const handleSave = (event) => {
    event.preventDefault();
    dispatch({ 
      
      type: 'POST_NEW_SONG', 
      payload: newSong 
      
    });
   };

  console.log(newSong);

  const uploadComplete = (fileUrl) => {
    console.log('fileUrl upload complete', fileUrl);
      setNewSong({...newSong, src: fileUrl})
  }

  const toUserHome = () => {
    history.push('/user')
}
  
  return (
    <div onDoubleClick={toUserHome}>
      <Paper className={paper} onDoubleClick={e => e.stopPropagation()} elevation={10}>
        <FormControl >
          <form className={root} onSubmit={handleSave} noValidate autoComplete="off" >
            <div className={cardContent}>
            <Typography variant = "h4" component="h5" className={title}>Add A Song</Typography>
            <TextField
              label="Title"
              onChange={enterNewSong('title')}
              value={newSong.title}
              multiline className={textField}
            />
          
            <TextField
              label="Instrument Notes"
              onChange={enterNewSong('instrument_notes')}
              value={newSong.instrument_notes}
              multiline className={textField}

            />
         
          <TextField
              label="Performance Notes"
              onChange={enterNewSong('performance_notes')}
              value={newSong.performance_notes}
              multiline className={textField}

            />
          
          <TextField
              label="Lyrics"
              onChange={enterNewSong('lyrics')}
              value={newSong.lyrics}
              multiline className={textField}
            />
          
          <Select
              name="priority"
              onChange={enterNewSong('priority')}
              >
                <option defaultValue={''}>Select Completion Priority</option>
                <option value={'1'}>First</option>
                <option value={'2'}>Second</option>
                <option value={'3'}>Third</option>
          </Select>
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

export default connect() (AddSong);