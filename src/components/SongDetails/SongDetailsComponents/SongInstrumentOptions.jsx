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
      paddingLeft: '.5em'
    }, 

    menuIcon: {
      color: '#3b95ac',
      '&:hover': {
        color:'#2a4f64'
      }

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
  
    return (
      
      <>
        
        
        
        {song.primary_instrument === 'keyboard' ? 
          
          
            <IconButton>
            
            
            <Piano

                className={menuIcon}
                aria-controls="simple-menu" 
                aria-haspopup="true"
                fontSize={'inherit'}
                onClick={handleClickOpen}

            >

            </Piano>
            </IconButton>

            :

            song.primary_instrument === 'guitar' ?

            <IconButton

                className={menuIcon}
                aria-controls="simple-menu" 
                aria-haspopup="true"
                fontSize={'inherit'}
                onClick={handleClickOpen}

            
            >
            
            <b><img style={{width:18, height:18, paddingBottom:'.05em' }} src="plectrum.png"></img></b>
            
            </IconButton>

            :
            null

            }
        
        
          <MenuItem onClick={handleClickOpen}/>

         
          
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
              
                    Performance Reminders
              
                </Typography>
           
              </DialogTitle>
          
                  <DialogContent className={menuItems}>
                    {/*this structure can stay the same but AddChordDiagram is only going to be one aspect of the broader 
                    AddReminders component which will also include the instrumentSpecs and performanceNotes components; the reasoning for 
                    this is to allow the post and update actions to be handled separately*/}
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