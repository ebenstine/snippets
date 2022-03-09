import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch } from 'react-redux';
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
  const [open, setOpen] = useState(false);

 
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

  return (
    <>
    
    <Paper className={paper} elevation={10}>
    
    
    {songs.length ?  

      <>
        <div style={{display:'flex', justifyContent:'center' }}>
        
        <IconButton
          onClick={handleClickOpen}
        >
        <AccountCircle style={{color: '#233d4d', width:30, height:30}}/>
        </IconButton>
        </div>
        
        <br></br>

        <Typography 
          
          align="center" 
          variant = "h4" 
          className = {welcome} 
        >
          
          Hey, {user.username}!
        </Typography>

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
      <div style={{display:'flex', justifyContent:'center' }}>
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

    

      
      
      <div style={{display:'flex', justifyContent:'center'}}>
      <AddAlbum/>
      </div>
      
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
