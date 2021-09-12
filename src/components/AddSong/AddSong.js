import React, { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Paper, TextField, Button, Typography, Select, FormControl } from '@material-ui/core';
import { connect } from 'react-redux';
import useStyles from './AddSongStyles'
import Uploader from '../Uploader/Uploader';

const AddSong = () => {
  const dispatch = useDispatch();
  const { root, inputs, paper, textField, cardContent, title, titleField } = useStyles();
  const { handleSubmit, reset, register } = useForm();
  const [url, setUrl] = useState ('no file dropped')
  const [newSong, setNewSong] = useState({
    title: '',
    instrument_notes:'',
    performance_notes: '',
    priority: '',
    lyrics: '',
    preview_audio: ''
  });

  const enterNewSong = (key) => (event) => {
    setNewSong({ ...newSong, src: url, [key]: event.target.value });
  };

  const addNewSong = (event) => {
    event.preventDefault();
    dispatch({ type: 'POST_NEW_SONG', payload: newSong });
    setNewSong({
        title: '',
        instrument_notes:'',
        performance_notes: '',
        priority:'',
        lyrics: '',
        preview_audio:''
        
    });
  };

  console.log(newSong);

  const uploadComplete = (fileUrl) => {
      setUrl(`${fileUrl}`)
  }

  const toUserHome = () => {
    history.push('/user')
}
  
  return (
    <div onDoubleClick={toUserHome}>
      <Paper className={paper} onDoubleClick={e => e.stopPropagation()} elevation={10}>
        <FormControl >
          <form className={root} onSubmit={addNewSong} noValidate autoComplete="off" >
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
              label="Priority"
              name="priority"
              onChange={enterNewSong('priority')}
              
                >
                <option default value=''>priority to finish-</option>
                <option value='1'>First</option>
                <option value='2'>Second</option>
                <option value='3'>Third</option>
          </Select>
          <Uploader 
                
            uploadComplete={uploadComplete}
              
          />
         
          
          <FormControl>
            <section>
            <Button type="submit" value="Add New Song" variant="contained" color="primary" >
              Add Song
            </Button>
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