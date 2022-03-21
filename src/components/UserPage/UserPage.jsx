import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Paper, Button, Typography, IconButton, Dialog} from '@material-ui/core'
import useStyles from '../UserPage/UserPageStyles'
import ExitToApp from '@material-ui/icons/ExitToApp';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AddAlbum from './AddAlbum';

const UserPage = () => {
  
  const user = useSelector((store) => store.user);
  const songs = useSelector((store) => store.songs);
  const allRecordings = useSelector((store) => store.allRecordings)
  
  
  const { paper, 
          welcome, 
          songCount, 
          recordingCount, 
          button2, 
          playIcon, 
          highlight,
          
        
        } = useStyles();


  const dispatch = useDispatch();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [showForm, setShowForm] = useState(false)
  const [showPrompt, setShowPrompt] = useState(true)

 
  useEffect(() => {
    dispatch({ type: 'FETCH_SONGS' })
    dispatch({ type: 'FETCH_ALL_RECORDINGS '})
}, [dispatch]);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false)
}

const handleFormRender = () => {
  setShowForm(true)
}

const handlePrompt = () => {
  setShowPrompt(false)
}

const handleCancel = () => {
  history.push('/songsList')
}


  return (
    
    <>
    
      <Paper className={paper} elevation={10}>
    
        {songs.length ?  

          <>
            <div style={{display:'flex', justifyContent:'center', marginTop: '1em' }}>
        
              <IconButton
                onClick={handleClickOpen}
              >
                <AccountCircle style={{color: '#233d4d', width:30, height:30}}/>
              </IconButton>
            </div>
        
            <br></br>
            
            <div>
              <Typography 
          
                align="center" 
                variant = "h4" 
                className = {welcome} 
              >
          
                Hey, {user.username}!
              </Typography>
            </div>

            <br></br>
        
              <Dialog
                PaperProps={{
                  
                  style: { border: "1px solid #2a4f64" }

                }}
                open={open} 
                onClose={handleClose}
              >
                <Typography 
        
                  align="center" 
                  variant = "h6" 
                  className = {songCount}>
          
                    <span className={playIcon}>▶</span>
             
                  &nbsp;You are working on <span className={highlight}>{songs.length}</span> songs.
      
                </Typography>
      
                <br></br>
      
                <Typography 
                  
                  align="center" 
                  variant = "h6" 
                  className = {recordingCount}>
                  
                    <span className={playIcon}>▶</span>

                  &nbsp;You've uploaded <span className={highlight}>{allRecordings.length}</span> audio recordings.
              
                </Typography>
              </Dialog>
          </>
        :
          <>
            <div style={{display:'flex', justifyContent:'center', marginTop:'1em' }}>
              <AccountCircle style={{color: '#233d4d', width:30, height:30}}/>
              </div>

              <Typography 
                
                align="center" 
                variant = "h4" 
                className = {welcome} 
              >
                
                Hey, {user.username}!
              </Typography>

          </>
            
        }

        {showPrompt ? 
          <>
            <Typography variant='h4'>
              Do you have an album release to plan?
            </Typography>

            <Button onClick={ () => { handleFormRender(); handlePrompt();} }>
              Yes
            </Button>

            <Button onClick={handleCancel}>
              Not Now
            </Button>
          </>
        :
        
          null
        }
          
        {showForm ?
            <div style={{display:'flex', justifyContent:'center'}}>
            
              <AddAlbum/>
            
            </div>
          
          :

          null
        }
        
          
          <div style={{display:'flex', justifyContent:'center'}}>
            

            <Button 

              size="small" 
              className={button2} 
              onClick={() => dispatch({ type: 'LOGOUT' })}>Sign Out&nbsp;
              
              <ExitToApp/>

            </Button>
          </div>

          

      </Paper>
    </>
  );
}

export default UserPage;
