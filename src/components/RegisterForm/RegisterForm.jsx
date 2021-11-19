import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Container, Typography, TextField, makeStyles } from '@material-ui/core';

// change styling for MUI components
const useStyles = makeStyles((theme) => ({

  root: {
    paddingTop: '5em',
     '& .MuiTextField-root': {
         margin: theme.spacing(1),
         color: 'white'
         //width: '25ch'
     },
     '& label.Mui-focused': {
         color: '#3b95ac',
         
     },
     '& .MuiInput-underline:after': {
         borderBottomColor: '#ffab5c',
         
         
     },
     '& .MuiOutlinedInput-root': {
         '& fieldset': {
             borderColor: '#ffab5c',
             
         },
         '&:hover fieldset': {
             borderColor: '#ffab5c',
             
         },
         '&.MuiSelect fieldset': {
             borderColor: '#ffab5c',
             borderRadius: '8px',
             paddingLeft: '3em'
         },
         
 
     },
 },
  
  btn: {
    marginTop: 30,
    marginBottom: 25,
    background: "#EBEBEB",
   
    border: '1px solid #3b95ac',
    paddingLeft: '1em',
    paddingRight: '1em'
  },
  signUp: {
    marginBottom: 15,
    color: '#2a4f64'
  },
  password: {
    marginTop: 15,
  }

}))
// change default themes of specific MUI components 

function RegisterForm() {
  // declare variable to use styles function
  const classes = useStyles();
  // create local states for user name and password
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // grab error info stored in error reducer
  const errors = useSelector((store) => store.errors);
  const dispatch = useDispatch();
  // send register information to register reducer to post in user database
  const registerUser = (event) => {
    event.preventDefault();
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
      },
    });
  }; // end registerUser
  return (
    
    // MUI container for side margins
    <Container align="center" className={classes.root}>
      {/* grid for responsive design */}
      <Grid noValidate autoComplete="off" onSubmit={registerUser}>
        {/* MUI input fields and button for registration form  */}
        <Grid item lg={2} xs={6} sm={3} md={3}>
          <Typography variant="h5" className={classes.signUp}>Create Account</Typography>
        </Grid>
        {errors.registrationMessage && (
          <h3 className="alert" role="alert">
            {errors.registrationMessage}
          </h3>
        )}
        <Grid item lg={2} xs={6} sm={3} md={3}>
          <TextField noValidate autoComplete="off" required variant="standard" label="Username" color="primary" value={username}
            onChange={(event) => setUsername(event.target.value)} />
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
          <TextField className={classes.password} required label="Password" variant="standard" color="primary" value={password}
            type="password" noValidate autoComplete="off" onChange={(event) => setPassword(event.target.value)} />
        </Grid>
        
          <Grid item lg={2} xs={6} sm={3} md={3}>
            <Button variant="contained" className={classes.btn} align="center" onClick={registerUser}>Sign Up</Button>
          </Grid>
        

      </Grid>
    </Container>
        

  );
}

export default RegisterForm;