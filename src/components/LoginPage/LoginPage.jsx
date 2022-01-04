import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button, Paper, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

  invite: {
    color: '#2a4f64',

  },

  signUp: {
    background: '#fff099',
        color: '#2a4f64',
        border: '1px solid #3b95ac',
        '&:hover': {
            background:'#fde76c',
            },
    paddingLeft: '1em',
    paddingRight: '1em',
    color: '#2a4f64',
    marginBottom: '10em'
  },



  
 //paper: {
    margin: '4em auto',
    background: 'linear-gradient(to right,  #9c9e9f 0%,#f6f6f6 100%)',
    border: '1px solid #fdd377',
    paddingBottom: '2em',
    width: 650,
    marginBottom: '10em'
//},

})


function LoginPage() {
  const history = useHistory();
  const {invite, signUp, paper} = useStyles();

  return (
    <>
  
      <LoginForm />
      <Typography align="center" variant="h6" className={invite}>
      No account yet?
      </Typography>
      <br></br>
      <center>
        <Button
          variant="contained"
          size="medium"
          className={signUp}
          onClick={() => {
            history.push('/registration');
          }}
        >
          Make One!
        </Button>
      </center>
     
    </>
  );
}

export default LoginPage;