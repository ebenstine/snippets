import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';

const useStyles = makeStyles({

  prompt: {
    color: '#2a4f64',

  },

  signIn: {
    background: '#EBEBEB',
    border: '1px solid #3b95ac',
    paddingLeft: '1em',
    paddingRight: '1em'
  }

})



function RegisterPage() {
  const history = useHistory();
  const {prompt, signIn} = useStyles();

  return (
    <div>
      <RegisterForm />

      <center>
        <Typography className={prompt}>
        Already have an account?
        </Typography>
        <br></br>
        <Button
          variant="contained"
          className={signIn}
          onClick={() => {
            history.push('/login');
          }}
        >
          Sign In
        </Button>
      </center>
    </div>
  );
}
export default RegisterPage;
