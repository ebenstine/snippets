import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import Uploader from '../Uploader/Uploader'
// import AudioUploader from '../../AudioUpload/AudioUpload';

function AddAudioDialog({song, handleMenuClose, dispatch }) {
  const [open, setOpen] = useState(false);
  const [fileUrl, setFileUrl] = useState('')
  const [newAudio, setNewAudio] = useState ({})
  

  const handleClickOpen = () => {
    if (song === null){pu
      setOpen(false)
    } else
    setOpen(true);
  };

  const handleSave = () => {
    let newTitle = fileUrl.split("_").pop();
    newTitle = newTitle.split(".mp3").shift();
    newTitle = newTitle.split(".m4a").shift();
    let newAudio = {song_id : song.id, src: fileUrl, title: newTitle}
    dispatch({ type: 'SETTING_SONG', payload: song.song_id })
    dispatch({ type: 'POST_NEW_RECORDING', payload: newAudio})   
    handleMenuClose();
    setOpen(false);
    setFileUrl('');
  };

  const handleCancel = () => {
    setOpen(false);
    handleMenuClose();
    setFileUrl('');
  };

  const uploadComplete = (fileUrl) => {
    console.log('fileUrl upload complete', fileUrl);
      setNewAudio({...newAudio, src: fileUrl})
  }


  return (
    <div>
      <MenuItem onClick={handleClickOpen}> Add New Audio File </MenuItem>
      <Dialog open={open} onClose={handleCancel} aria-labelledby="Rename song title input">
        <DialogTitle id="newAudio">Select a file to upload </DialogTitle>
        <DialogContent>
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


export default AddAudioDialog;