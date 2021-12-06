import React, {useEffect} from 'react';
//import LogOutButton from '../LogOutButton/LogOutButton';

import {useSelector, useDispatch } from 'react-redux';
import { Paper, Button, Typography, Box } from '@material-ui/core'
import useStyles from '../UserPage/UserPageStyles'
import ExitToApp from '@material-ui/icons/ExitToApp';

const UserPage = () => {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const songs = useSelector((store) => store.songs);
  const allRecordings = useSelector((store) => store.allRecordings)
  const { paper, welcome, songCount, recordingCount, button1, button2 } = useStyles();


  const dispatch = useDispatch();

 
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
      <Typography align="center" variant = "h6" className = {songCount}>You have {songs.length} different song projects open right now.</Typography>
      <Typography align="center" variant = "h6" className = {recordingCount}>Between them, you've uploaded {allRecordings.length} total recordings. </Typography>
      <br></br>
    </div>

      <section textAlign="center">
    
    
      
      <Button size="small" className={button2} onClick={() => dispatch({ type: 'LOGOUT' })}>Sign Out<ExitToApp/></Button>
      </section>
    </Paper>
    
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
