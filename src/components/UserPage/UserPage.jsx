import React, {useEffect} from 'react';
//import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { Paper, Button, Typography, Box } from '@material-ui/core'
import useStyles from '../UserPage/UserPageStyles'
const UserPage = () => {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const songs = useSelector((store) => store.songs);
  const allRecordings = useSelector((store) => store.allRecordings)
  const { paper, welcome, songCount, recordingCount, button1, button2 } = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const handleExplore = () => {
    history.push('/songsList')
  }

  useEffect(() => {
    dispatch({ type: 'FETCH_SONGS' })
    dispatch({ type: 'FETCH_ALL_RECORDINGS '})
}, [dispatch]);

  return (
    <>
    
    <Paper className={paper} elevation={10}>
    <div className="container">

      <Typography align="center" variant = "h4" className = {welcome} >Hi, {user.username}!</Typography>
      <br></br>
      <Typography align="center" variant = "h6" className = {songCount}>You are working on {songs.length} different songs right now.</Typography>
      <Typography align="center" variant = "h6" className = {recordingCount}>The total count of all recordings is {allRecordings.length}</Typography>
      <br></br>
    </div>

      <Box textAlign="center">
    
      <Button variant="contained" size="small" className={button1} onClick={() => handleExplore()}>View Songs</Button>
      <br></br>
      <Button variant="contained" size="small" className={button2} onClick={() => dispatch({ type: 'LOGOUT' })}>Sign Out</Button>
      </Box>
    </Paper>
    
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
