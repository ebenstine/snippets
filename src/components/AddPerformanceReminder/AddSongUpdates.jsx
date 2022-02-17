//import into performanceGuide
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl } from '@material-ui/core';

import { connect, useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';

import SongInstrumentSpecs from './SongInstrumentSpecs';
import useStyles from './AddSongUpdatesStyles'
import Cancel from '@material-ui/icons/Cancel';
import Backup from '@material-ui/icons/Backup';
import { NoteAddOutlined } from '@material-ui/icons';






const AddSongUpdates = ({ song, handleMenuClose }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { dialog, root, actionDiv, dialogTitle, dialogButtons, upload, descriptionText  } = useStyles();
  const params = useParams();
  const songDetails = useSelector((store) => store.songDetails)
  
  const [open, setOpen] = useState(false);



  

  
  
  const handleClickOpen = () => {
    if (song === null){
      setOpen(false)
    } else
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
    //handleMenuClose();
    
  }
  const handleSave = (event) => {
    event.preventDefault();
    
   setOpen(false);
  };

  
  
  
  return (

    <>

    

    
    
    
      
      <MenuItem 
        
        onClick={handleClickOpen} 
        className={upload}>
        <NoteAddOutlined/>
        &nbsp;Create Text Reminder
        
      </MenuItem>
      
        <Dialog 
          
          PaperProps={{
          
            style: { 
              
                      border: "1px solid #2a4f64",
                      background: "rgb(199, 246, 252)",
                      margin:'auto',
                      width: 350
                    
                    }

          }}
          open={open} 
          onClose={handleCancel}
        
        >
      
        <div className={root}>
        
              <DialogTitle className={dialogTitle} >
                  Enter Specifications and Notes
              </DialogTitle>

              
                <DialogContent className={dialog}>
        
                   <SongInstrumentSpecs/>
                
                </DialogContent>
                

        </div>    
        </Dialog>
   
    
        
    
    </>
  );

        
}

export default AddSongUpdates;