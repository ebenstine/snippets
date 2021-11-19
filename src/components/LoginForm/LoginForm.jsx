import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Button, Grid, Container, Typography, TextField, Card, CardHeader, CardContent, makeStyles, ThemeProvider } from '@material-ui/core';

//change of styling with MUI components
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
    background: '#EBEBEB',
    border: '1px solid #3b95ac',
    paddingLeft: '1em',
    paddingRight: '1em',
    color: '#2a4f64' 
  },
  signIn: {
    marginBottom: 15,
    color: '#2a4f64',
    
    
  },
  password: {
    marginTop: 15,
    
    
  },

  

}))




function LoginForm() {
  //declaring classes for MUI styling so can target specific components to change
  const classes = useStyles();

  //creating local states
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //grabbing error store
  const errors = useSelector(store => store.errors);

  //declaring variable to use dispatch function
  const dispatch = useDispatch();

  //declaring variable to utilize history function
  const history = useHistory();


  //if have correct login - on "sign in" redirect to home / otherwise render login error
  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
      history.push('/user')
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    }
  }; // end login

  return (
    <>
      {/* mui container for side margins */}
    
      <Container align="center" className={classes.root}>
        {/* grid for responsive design */}
        <Grid noValidate autoComplete="off" onSubmit={login}>

          <Grid item lg={2} xs={6} sm={3} md={3}>
            {/* login inputs / button */}
            <Typography variant="h5" className={classes.signIn}>Sign In</Typography>
          </Grid>
          {errors.loginMessage && (
            <h3 className="alert" role="alert">
              {errors.loginMessage}
            </h3>
          )}

          <Grid item lg={2} xs={6} sm={3} md={3}>
            <TextField noValidate autoComplete="off" required variant="standard" label="Username"  value={username}
              onChange={(event) => setUsername(event.target.value)} />
          </Grid>
          <Grid item lg={2} xs={6} sm={3} md={3}>
            <TextField className={classes.password} required label="Password" variant="standard"  value={password}
              type="password" noValidate autoComplete="off" onChange={(event) => setPassword(event.target.value)} />
          </Grid>
          
            <Grid item lg={2} xs={6} sm={3} md={3}>
              <Button variant="contained" className={classes.btn} align="center" onClick={login}>Go!</Button>
            </Grid>
          

        </Grid>
      </Container>
      

    </>
  );
}

export default LoginForm;




