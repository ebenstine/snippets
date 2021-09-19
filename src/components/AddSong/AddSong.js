import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Paper, MenuItem, TextField, Button, Typography, Select, FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import useStyles from './AddSongStyles'
import Uploader from '../Uploader/Uploader';


const AddSong = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { root, inputs, paper, textField, cardContent, title } = useStyles();
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
    history.push('/songsList')
   };

  console.log(newSong);

  const uploadComplete = (fileUrl) => {
    console.log('fileUrl upload complete', fileUrl);
      setNewSong({...newSong, src: fileUrl})
  }

  const toUserHome = () => {
    history.push('/songsList')
}
  
  return (
    <div>
      <Paper className={paper} onDoubleClick={e => e.stopPropagation()} elevation={10}>
        <FormControl >
          <form className={root} onSubmit={handleSave} noValidate autoComplete="off" >
            <div className={cardContent}>
            <Typography variant = "h5" component="h5" className={title}>Add A New Song</Typography>
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
                <MenuItem defaultValue={''}>Select Completion Priority</MenuItem>
                <MenuItem value={'1'}>First</MenuItem>
                <MenuItem value={'2'}>Second</MenuItem>
                <MenuItem value={'3'}>Third</MenuItem>
          </Select>
          <Uploader 
                
            uploadComplete={uploadComplete}
            multiline className={textField}  
          />
         
          
          <FormControl>
            <section>
            <Button variant="contained" onClick={toUserHome} className={inputs} > CANCEL </Button>
            <br></br>
            <Button variant="contained" type="submit" /*onClick={toUserHome}*/ className={inputs}> SAVE </Button>
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

