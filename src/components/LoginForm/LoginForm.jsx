import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Button, Paper, Grid, Container, Typography, Card, CardHeader, CardContent, makeStyles, ThemeProvider } from '@material-ui/core';
import { TextField, FormControl } from '@mui/material'
//change of styling with MUI components
const useStyles = makeStyles((theme) => ({

  root: {
    paddingTop: '5em',
  
      '& .MuiTextField-root': {
          margin: theme.spacing(1),
          color: '#2a4f64',
          
          '&:hover fieldset': {
            borderColor: '#ffab5c'
          }
          //width: '25ch'
      },
      '& label.Mui-focused': {
          color: '#3b95ac',
          borderColor: '#ffab5c',
      },
      '& .MuiInput-underline:after': {
          borderBottomColor: '#3b95ac',
      }, 
          
          
          
      
      "& .MuiOutlinedInput-input": {
          color: "#2a4f64",
         
          
      },
      //"& .Mui-disabled .MuiOutlinedInput-notchedOutline": {
          //border: "2px solid #3b95ac"
        //},
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "1.5px solid#3b95ac",
          borderRadius: "3px 3px 3px 3px"
        },
      

        
      '& .MuiOutlinedInput-root': {
          '& fieldset': {
              color: '#3b95ac',
              //paddingLeft: '4em'
              
          },
          '& .Mui-selected': {

             borderColor: '3b95ac'

          },
          '&:hover fieldset': {
              border:' 1.5px solid #3b95ac' 
          },  
          '&:fieldset.Mui-focused': {
              border:' 1.5px solid #3b95ac'
          
          },
          
          
          
          
          
        
          
          
          
      },
  },
 
   btn: {
     marginTop: 30,
     marginBottom: 25,
     background: '#fff099',
         color: '#2a4f64',
         border: '1px solid #3b95ac',
         '&:hover': {
             background:'#fde76c',
             },
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
            <TextField noValidate autoComplete="off" required variant="outlined" label="Username"  value={username}
              onChange={(event) => setUsername(event.target.value)} />
          </Grid>
          <Grid item lg={2} xs={6} sm={3} md={3}>
            <TextField className={classes.password} required label="Password" variant="outlined"  value={password}
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