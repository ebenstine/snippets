import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Button, Typography, Input, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import Uploader from '../Uploader/Uploader';

const AddSong = () => {
  const dispatch = useDispatch();
  const [newSong, setNewSong] = useState({
    title: '',
    tuning:'',
    performanceNotes: '',
    lyrics: '',
  });

  const enterNewSong = (key) => (event) => {
    setNewSong({ ...newSong, [key]: event.target.value });
  };

  const addNewSong = (event) => {
    event.preventDefault();
    dispatch({ type: 'ADD_SONG', payload: newSong });
    setNewSong({
        title: '',
        tuning:'',
        performanceNotes: '',
        lyrics: '',
        priority:''
    });
  };

  console.log(newSong);
  
  return (
    <Box display="flex">
      <Typography>Add a new song:</Typography>
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
              onChange={enterNewSong('performanceNotes')}
              placeholder="Enter performance notes"
              type="text"
              value={newSong.performanceNotes}
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
                <option selected value=''>priority to finish-</option>
                <option value='1'>Tier One</option>
                <option value='2'>Tier Two</option>
                <option value='3'>Tier Three</option>
                </select>
          </Grid>
          
          <Grid item>
            <Button type="submit" value="Add New Song" variant="contained" color="primary" >
              Add new song
            </Button>
          </Grid>
          <Grid item>
            <Uploader uploadComplete={uploadComplete} />
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default connect() (AddSong);