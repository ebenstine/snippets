import React, {useEffect} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { Paper, Button, Typography, Card } from '@material-ui/core'
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
          genrePrompt, 
          playIcon, 
          highlight,
          infoCard
        
        } = useStyles();


  const dispatch = useDispatch();

 
  useEffect(() => {
    dispatch({ type: 'FETCH_SONGS' })
    dispatch({ type: 'FETCH_ALL_RECORDINGS '})
}, [dispatch]);

  return (
    <>
    
    <Paper className={paper} elevation={10}>
      
      <div className="container">
        <div style={{display:'flex', justifyContent:'center' }}>
        <AccountCircle style={{color: '#233d4d', width:30, height:30}}/>
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
      
        <br></br>
      
        
        <br></br>

      
      </div>
      
        <div style={{display:'flex', justifyContent:'center'}}>

        <AddAlbum/>
    
    
      
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
