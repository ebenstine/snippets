import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import AddChordImage from '../../AddPerformanceReminder/AddChordImage';
import AddSongUpdates from '../../AddPerformanceReminder/AddSongUpdates';
import PerformanceGuide from '../../PerformanceGuide/PerformanceGuide';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';
import { Piano } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({

    menuItems: {
        margin: theme.spacing(1),
        color: '#2a4f64',
        
       
        
        
        //borderBottom: '1px solid #6ca0ad',
        paddingLeft: '1em',
        paddingRight: '1em'
    },

    heading: {
      color: '#2a4f64',
      borderBottom: '1px solid #2a4f64',
      fontSize: 20,
      display: 'flex',
      justifyContent:'center'
    }, 

    menuIcon: {
      paddingTop: '2em',
      paddingRight:'2em',
      paddingLeft:'2em',
      paddingBottom: '2em'

    }

}))


const SongInstrumentOptions = ({song}) => {
    const {heading, menuItems, menuIcon} = useStyles();
    const songs = useSelector (store => store.songs);
    const songDetails = useSelector(store => store.songDetails); 
    const [open, setOpen] = useState(false);
   
  
    const handleClickOpen = () => {
      
      if (song === null)
        {
          setOpen(false)
        } else
      
          setOpen(true);
    };
    
    const handleCancel = () => {
      setOpen(false);
    }
  return (
    <>

      {songDetails.map((song) => {
        //the following conditional render is unused and needs cleaning up
          return (
            
            <>
              
              
              
              {song.primary_instrument === 'keyboard' ? 
                
                  <div className={menuIcon}>
                  <IconButton
                  
                  
                  
                      style={{color:'#233d4d'}}
                      aria-controls="simple-menu" 
                      aria-haspopup="true"
                      fontSize={'inherit'}
                      onClick={handleClickOpen}

                  >

                  <b><img style={{width:26, height:26, paddingBottom:'.05em' }} src="performance.png"></img></b>
                  </IconButton>
                  </div>
                  :
                  
                  song.primary_instrument === 'guitar' ?
                  
                  <div className={menuIcon}>
                  <IconButton

                      
                      aria-controls="simple-menu" 
                      aria-haspopup="true"
                      fontSize={'inherit'}
                      onClick={handleClickOpen}

                  
                  >
                  
                  <b><img style={{width:26, height:26, paddingBottom:'.05em', color:'#233d4d' }} src="performance.png"></img></b>
                  
                  </IconButton>
                  </div>
                  :
                  song.primary_instrument === 'other' ?

                  <div className={menuIcon}>
                  <IconButton

                      
                      aria-controls="simple-menu" 
                      aria-haspopup="true"
                      fontSize={'inherit'}
                      onClick={handleClickOpen}

                  
                  >
                  
                  <b><img style={{width:26, height:26, paddingBottom:'.05em', color:'#233d4d' }} src="performance.png"></img></b>
                  </IconButton>
                  </div>
                  :

                  null
                  
                  
              }

              
                
                  <Dialog 
                      
                    open={open} 
                    onClose={handleCancel} 
                    aria-labelledby="Rename song title input"
                    PaperProps={{
                        
                      style: { 
                            
                        border: "1px solid #2a4f64",
                        background: "rgb(199, 246, 252",
                        
                      }
                        
                    }}    
                      
                  >
                
                    <DialogTitle>
                  
                      <Typography 
                    
                        className={heading}>
                    
                          Performance Documentation
                    
                      </Typography>
                
                    </DialogTitle>
                
                        <DialogContent className={menuItems}>
                         
                          <AddChordImage/>

                        </DialogContent>
                              
                          <DialogContent className={menuItems}>
                  
                            <AddSongUpdates/>  
                  
                          </DialogContent>

                            <DialogContent className={menuItems}>
                    
                              <PerformanceGuide/>  
                    
                            </DialogContent>
                
                
                
                  </Dialog>
            </>
          
          );
      })}
    </>

  )
}
  
  export default SongInstrumentOptions;