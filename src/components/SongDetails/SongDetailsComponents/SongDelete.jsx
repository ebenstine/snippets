import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import Delete from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    buttons: {
        marginLeft: '1em',
        marginBottom: '.3em',
        marginRight: '2em',
        color: '#233d4d',
        border: '1px solid #c8ecf5',
        paddingLeft: '1em',
        paddingRight: '1em'
        
    }
    
  })
  


function SongDelete({ song, dispatch }) {
  const [open, setOpen] = useState(false);
  const {buttons} = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    const id = song.id;
    setOpen(false);
    handleClose();
    dispatch({type: 'DELETE_SONG', payload: id})
  }

  const handleCancel = () => {
    setOpen(false);
    handleClose();
  }

  return (
    <>
      <Button className={buttons} variant="contained" onClick={handleClickOpen}><Delete/></Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="Rename song title input">
        <DialogTitle id="dialogTitle">Delete This Song?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Is the song saved somewhere permanent, or somewhere in the process of being published to a public platform?
            If not, maybe it's not really finished yet and should continue to live here.  What's the best move right now?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancel} variant="outlined">
            Cancel
          </Button>
          <Button onClick={handleDelete} variant="outlined">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}


export default connect()(SongDelete);