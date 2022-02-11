import React, { useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Typography } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import AddRecording from '../../AddRecording/AddRecording';
import RecordingsList from '../../RecordingsList/RecordingsList';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from '@material-ui/core/styles';

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
      fontSize: 20
    }, 

    menuIcon: {
      color: '#3b95ac',
      '&:hover': {
        color:'#2a4f64'
      }

    }

}))


const SongAudioOptions = ({song}) => {
    const {heading, menuItems, menuIcon} = useStyles();
    
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
      
      <div>
        
        <IconButton>
          
          <MoreHorizIcon 

            className={menuIcon}
            aria-controls="simple-menu" 
            aria-haspopup="true"
            fontSize={'inherit'}
            onClick={handleClickOpen}>

          </MoreHorizIcon>
      
        </IconButton>
        
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
              
                    Audio Files Menu
              
                </Typography>
           
              </DialogTitle>
          
                  <DialogContent className={menuItems}>
          
                    <AddRecording/>
          
                      </DialogContent>
          
                        <DialogContent className={menuItems}>
          
                          <RecordingsList/>
          
                            </DialogContent>
          
          
          
            </Dialog>
        
    </div>
    
  );

}
  
  export default SongAudioOptions;