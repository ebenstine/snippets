import React from 'react';
import LoginForm from '../LoginForm/LoginForm';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core'


function LoginPage() {
  const history = useHistory();

  return (
    <div>
      <LoginForm />
      <center>
      Don't have an account?
      </center>
      <br></br>
      <center>
        <Button
          variant="contained"
          size="medium"
          className="btn btn_asLink"
          onClick={() => {
            history.push('/registration');
          }}
        >
          Sign Up
        </Button>
      </center>
    </div>
  );
}

export default LoginPage;
