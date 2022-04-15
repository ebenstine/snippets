import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Grid, Container, Typography,  makeStyles } from '@material-ui/core';
import { TextField } from '@mui/material'
import PersonAddIcon from '@mui/icons-material/PersonAdd'; 
// change styling for MUI components
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
     background: 'transparent',
         color: '#2a4f64',
         border: '1px solid #3b95ac',
         '&:hover': {
             background:'#fde76c',
             },
     paddingLeft: '1em',
     paddingRight: '1em',
     color: '#2a4f64' 
   },
   
   signUp: {
     marginBottom: 15,
     color: '#2a4f64',
     
     
   },
   password: {
     marginTop: 15,
     
     
   },
 
   
 
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
          <Typography 

            variant="h5" 
            className={classes.signUp}
            >
            
            Create Account

          </Typography>

        </Grid>

          {errors.registrationMessage && (
            <h3 className="alert" role="alert">
              {errors.registrationMessage}
            </h3>
          )}

        <Grid item lg={2} xs={6} sm={3} md={3}>
          <TextField 
            
            noValidate autoComplete="off" 
            required variant="outlined" 
            label="Username" 
            color="primary" 
            value={username}
            onChange={(event) => setUsername(event.target.value)} 

            />
        </Grid>
        <Grid item lg={2} xs={6} sm={3} md={3}>
          <TextField 

            className={classes.password} 
            required label="Password" 
            variant="outlined" 
            color="primary" 
            value={password}
            type="password" 
            noValidate autoComplete="off" 
            onChange={(event) => setPassword(event.target.value)} 

            />
        </Grid>
        
          <Grid item lg={2} xs={6} sm={3} md={3}>
            <Button 
              
              variant="contained" 
              className={classes.btn} 
              size="small"
              align="center" 
              onClick={registerUser}

            >
              
              Sign Up &nbsp;
              <PersonAddIcon style={{color:'#2a4f64'}}/> 
            </Button>

          </Grid>

        

      </Grid>
    </Container>
        

  );
}

export default RegisterForm;