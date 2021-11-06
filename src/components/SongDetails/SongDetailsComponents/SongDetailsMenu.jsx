import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import AddRecording from '../../AddRecording/AddRecording';
import RecordingsList from '../../RecordingsList/RecordingsList';

const SongDetailsMenu = ({song}) => {
    const [open, setOpen] = useState(false);
   
  
    const handleClickOpen = () => {
      if (song === null){
        setOpen(false)
      } else
      setOpen(true);
    };
    const handleCancel = () => {
      setOpen(false);
    }

  
    return (
      <div>
        <MenuItem onClick={handleClickOpen}></MenuItem>
        <Dialog open={open} onClose={handleCancel} aria-labelledby="Rename song title input">
          <DialogTitle id="newAudio">Select a New Recording </DialogTitle>
          <DialogContent>
          <AddRecording/>
          <RecordingsList/>
          </DialogContent>
          <DialogActions>
            
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
  export default SongDetailsMenu;