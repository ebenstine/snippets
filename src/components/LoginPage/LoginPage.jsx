import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({

  invite: {
    color: '#2a4f64',

  },

  signUp: {
    background: '#EBEBEB',
    border: '1px solid #3b95ac',
    paddingLeft: '1em',
    paddingRight: '1em'
  }

})


function LoginPage() {
  const history = useHistory();
  const {invite, signUp} = useStyles();

  return (
    <div>
      <LoginForm />
      <Typography align="center" className={invite}>
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
    </div>
  );
}

export default LoginPage;
