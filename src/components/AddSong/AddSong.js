import React, { useState } from 'react';
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
    lyrics: '',
  });

  const enterNewSong = (key) => (event) => {
    setNewSong({ ...newSong, [key]: event.target.value });
  };

  const addNewSong = (event) => {
    event.preventDefault();
    dispatch({ type: 'POST_NEW_SONG', payload: newSong });
    setNewSong({
        title: '',
        tuning:'',
        performance_notes: '',
        lyrics: '',
        priority:''
    });
  };

  console.log(newSong);

  const uploadComplete = (publicUrl) => {
      setUrl(`${publicUrl}`)
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
                <option value='1'>Tier One</option>
                <option value='2'>Tier Two</option>
                <option value='3'>Tier Three</option>
                </select>
          </Grid>
          
          <Grid item>
            <Button type="submit" value="Add New Song" variant="contained" color="primary" >
              Enter Song Details
            </Button>
          </Grid>
          <Grid item>
            <Uploader uploadComplete={uploadComplete} />
          </Grid>
        </Grid>
      </form>
    </Box>
  );

  }

export default connect() (AddSong);