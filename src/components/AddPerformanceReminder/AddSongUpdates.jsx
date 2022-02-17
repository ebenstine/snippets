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
import SongPerformanceNotes from './SongPerformanceNotes';
import SongInstrumentSpecs from './SongInstrumentSpecs';
import useStyles from './AddChordImageStyles'
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

    

    
    
    <div>
      
      <MenuItem 
        
        onClick={handleClickOpen} 
        className={upload}>
        <NoteAddOutlined/>
        &nbsp;Create Text Reminder
        
      </MenuItem>
      
        <Dialog 
          
          PaperProps={{
          
            style: { border: "1px solid #2a4f64" }

          }}
          open={open} 
          onClose={handleCancel}
        
        >
      
          <FormControl>
        
            <form className={root}>
        
              <DialogTitle className={dialogTitle} >
                  Enter Specifications and Notes
              </DialogTitle>
        
                <DialogContent className={dialog}>
        
                   <SongInstrumentSpecs/>
                
                </DialogContent>

                <DialogContent className={dialog}>
        
                   <SongPerformanceNotes/>
                
                </DialogContent>

            </form>

          </FormControl>
        
        
            <DialogActions className={actionDiv}>
          
              <Button 
                
                onClick={handleCancel} 
                variant="contained" 
                size="small" 
                className={dialogButtons}
              >
            
                <Cancel/>

              </Button>
          
              <Button 
                
                onClick={handleSave} 
                variant="contained" 
                size="small" 
                className={dialogButtons}
              >
            
                <Backup/>

              </Button>

            </DialogActions>

        </Dialog>
   
    </div>
        
    
    </>
  );

        
}

export default AddSongUpdates;