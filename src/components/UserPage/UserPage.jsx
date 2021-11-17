import React from 'react';
//import LogOutButton from '../LogOutButton/LogOutButton';
import { useHistory } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux';
import { Paper, Button, Typography } from '@material-ui/core'
import useStyles from '../UserPage/UserPageStyles'
function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  const { paper, welcome, yourId, buttons } = useStyles();

  const history = useHistory();
  const dispatch = useDispatch();

  const handleExplore = () => {
    history.push('/songsList')
  }
  return (
    <>
    
    <Paper className={paper} elevation={10}>
    <div className="container">

      <Typography variant = "h4" className = {welcome} >Hi, {user.username}!</Typography>
      <Typography variant = "h6" className = {yourId}>Your ID is: {user.id}</Typography>
      <br></br>
    </div>
    
      <Button variant="contained" size="small" className={buttons} onClick={() => handleExplore()}>Enter</Button>
      <Button variant="contained" size="small" className={buttons} onClick={() => dispatch({ type: 'LOGOUT' })}>Log Out</Button>
      
    </Paper>
    
    </>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
