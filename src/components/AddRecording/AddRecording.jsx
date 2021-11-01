import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Uploader from '../Uploader/Uploader'

const AddRecording = ({ song, handleMenuClose }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  //const { root, inputs, paper, textField, cardContent, title } = useStyles();
  const params = useParams();
  console.log(params);
  const [fileUrl, setFileUrl] = useState ('no file was dropped');
  const [open, setOpen] = useState(false);
  const [newRecording, setNewRecording] = useState({

  });
  const handleClickOpen = () => {
    if (song === null){
      setOpen(false)
    } else
    setOpen(true);
  };
  const handleCancel = () => {
    setOpen(false);
    //handleMenuClose();
    setFileUrl('');
  }
  const enterNewRecording = (key) => (event) => {
    setNewRecording({ ...newRecording, id:params.id, [key]: event.target.value });
  };

  const handleSave = (event) => {
    event.preventDefault();
    dispatch({ 

      type: 'POST_NEW_RECORDING', 
      payload: newRecording

    });
   };

  console.log(newRecording);

  const uploadComplete = (fileUrl) => {
    console.log('fileUrl upload complete', fileUrl);
      setNewRecording({...newRecording, id:params.id, src: fileUrl})
  }

  const toUserHome = () => {
    history.push('/songsList')
}

  return (
    <div>
      <MenuItem onClick={handleClickOpen}> Add New Audio File </MenuItem>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="Rename song title input">
        <DialogTitle id="newAudio">Select a file to upload </DialogTitle>
        <DialogContent>
        <TextField
              label="Describe New Recording"
              onChange={enterNewRecording('description')}
              value={newRecording.description}
             
            />
        <Uploader uploadComplete={uploadComplete}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel}>
            Cancel
          </Button>
          { /*publicUrl.length > 0 &&*/  <Button onClick={handleSave} >
            Save
          </Button>}
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect() (AddRecording);