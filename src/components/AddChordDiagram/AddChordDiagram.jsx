//input form component

//conditional render of instrument spec 
// song.primaryInstrument === 'guitar' ? 
    // input form asks for guitar tuning
      // :
        //song.primaryInstrument === 'keyboard' ?
          // input form asks for keyboard type
            // : 
              // song.primaryInstrument === 'laptop' ?
                // input form asks for software used
                  // : 
                    // song.primaryInstrument === 'other' ?
                      // input form asks what instrument was used.
            // input value is song.instrument_spec, either way.

//import into performanceGuide
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { FormControl } from '@material-ui/core';
import { TextField } from '@mui/material'
import { connect, useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import ChordDiagramsUploader from './ChordDiagramsUploader'
import useStyles from './AddChordDiagramStyles'
import Cancel from '@material-ui/icons/Cancel';
import Backup from '@material-ui/icons/Backup';



const AddChordDiagram = ({ song, handleMenuClose }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { dialog, root, actionDiv, dialogTitle, dialogButtons, upload, descriptionText  } = useStyles();
  const params = useParams();
  const songDetails = useSelector((store) => store.songDetails)
  const [fileUrl, setFileUrl] = useState ('no file was dropped');
  const [open, setOpen] = useState(false);
  const [newImage, setNewImage] = useState({});

  let song = {
    instrument_specs: songDetails.instrument_specs,
    performance_notes: songDetails.performance_notes

  };

  

  
  const [reviseDetails, setReviseDetails] = useState(song);

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
  const enterNewImage = (key) => (event) => {
    setNewImage({ ...newImage, id:params.id, [key]: event.target.value });
  };

  const handleChange = (event) => {
    setReviseDetails({ ...reviseDetails, [event.target.name]: event.target.value })
  };

  if (newImage.image_path === '' || newRecording.src === 'null') {
    
    alert('You must upload an image file!')
  
  } 

  const handleSubmit = (event) => {
    event.preventDefault();
    let revisedSong = reviseDetails;
    revisedSong = { ...revisedSong, id: params.id };
    console.log('new song revisions made in', revisedSong);
    dispatch({
      type: 'REVISE_SONG',
      payload: revisedSong
    });
    dispatch({ 

      type: 'POST_DIAGRAM', 
      payload: newImage

    });
  }
    
  

  const handleSave = (event) => {
    event.preventDefault();
    dispatch({ 

      type: 'POST_DIAGRAM', 
      payload: newImage

    });

    dispatch ({

      type: 'REVISE_SONG',
      payload: revisedSong
    })
   setOpen(false);
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

    <>

    {songDetails.map((song) => {

    
        return (


    
    
    <div>
      
      <MenuItem 
        
        onClick={handleClickOpen} 
        className={upload}>
        <Backup/>
        &nbsp;Upload New
        
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
                  Add a Reminder
              </DialogTitle>
        
                <DialogContent className={dialog}>

                
                {song.primary_instrument === 'guitar' ?
                  <TextField
                     
                    label="guitar tuning" 
                    onChange={enterNewRecording('description')}
                    value={newRecording.description}
                    multiline className={descriptionText}
                    
              
                  /> 

                  :

                  <TextField
                     
                    label="keyboard type" 
                    onChange={enterNewRecording('description')}
                    value={newRecording.description}
                    multiline className={descriptionText}
                    
              
                  />

                } 
        
                    <ChordDiagramsUploader 
                
                      uploadComplete={uploadComplete}

                    />

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
        )
    })}
    </>
  );
}

export default AddChordDiagram;