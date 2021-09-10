import React, { useLayoutEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography, Input, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import Uploader from '../Uploader/Uploader';

const AddSong = () => {
  const dispatch = useDispatch();
  const [url, setUrl] = useState ('no file dropped')
  const [newSong, setNewSong] = useState({
    title: '',
    tuning:'',
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
        tuning:'',
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
    <Box display="flex">
      <Typography>Input song details:</Typography>
      <form onSubmit={addNewSong}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Input
              onChange={enterNewSong('title')}
              placeholder="Enter title"
              type="text"
              value={newSong.title}
            />
          </Grid>
          <Grid item>
            <Input
              onChange={enterNewSong('tuning')}
              placeholder="Enter tuning"
              type="text"
              value={newSong.tuning}
            />
          </Grid>
          <Grid item>
            <Input
              onChange={enterNewSong('performance_notes')}
              placeholder="Enter performance notes"
              type="text"
              value={newSong.performance_notes}
            />
          </Grid>
          <Grid item>
            <Input
              onChange={enterNewSong('lyrics')}
              placeholder="Enter lyrics"
              type="text"
              value={newSong.lyrics}
            />
          </Grid>
          <Grid item>
              <select
                onChange={enterNewSong('priority')}
                >
                <option default value=''>priority to finish-</option>
                <option value='1'>First</option>
                <option value='2'>Second</option>
                <option value='3'>Third</option>
                </select>
          </Grid>

          <Grid item>
            <Uploader 
                
                uploadComplete={uploadComplete}
              
                />
          </Grid>
          
          <Grid item>
            <Button type="submit" value="Add New Song" variant="contained" color="primary" >
              Add Song
            </Button>
          </Grid>
          
        </Grid>
      </form>
    </Box>
  );

  }

export default connect() (AddSong);
