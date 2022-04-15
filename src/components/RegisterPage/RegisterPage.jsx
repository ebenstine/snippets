import React from 'react';
import { Button, Typography, makeStyles } from '@material-ui/core'
import { useHistory } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import StartIcon from '@mui/icons-material/Start';

const useStyles = makeStyles({

  prompt: {
    color: '#2a4f64',

  },

  signIn: {
    background: 'transparent',
        color: '#2a4f64',
        border: '1px solid #3b95ac',
        '&:hover': {
            background:'#fde76c',
            },
    paddingLeft: '1em',
    paddingRight: '1em',
    marginBottom: '10em'
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
        Account already made?
        </Typography>
        <br></br>
        <Button
          variant="contained"
          className={signIn}
          size="small"
          onClick={() => {
            history.push('/login');
          }}
        >
          
          Sign In &nbsp;
          <StartIcon style={{color:'2a4f64'}}/>
        </Button>
      </center>
    </div>
  );
}
export default RegisterPage;
