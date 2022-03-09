import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { FormControl, Typography } from '@material-ui/core';
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './AddAlbumStyles'
import Cancel from '@material-ui/icons/Cancel';
import Backup from '@material-ui/icons/Backup';




const AddAlbum = ({ album }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {  root, dialogButtons, textfield, cardContent  } = useStyles();
  const params = useParams();

  const [newAlbum, setNewAlbum] = useState({});

  
  const handleCancel = () => {
   
  }
  const enterNewAlbum = (key) => (event) => {
    setNewAlbum({ ...newAlbum, id:params.id, [key]: event.target.value });
  };

  if (newAlbum.title === '') {
    
    alert('You must enter a description and upload an audio file!')
  
  } 

  const handleSave = (event) => {
    event.preventDefault();
    dispatch({ 

      type: 'POST_NEW_ALBUM', 
      payload: newAlbum

    });
   
  };

  console.log(newAlbum);

  
  
  return (
    
    
    <>

      <FormControl >
          
          <form className={root} onSubmit={handleSave} noValidate autoComplete="off" >
      
        <div className={cardContent}>

          <Typography
           align="center"
          >

            Start by adding an album
          </Typography>
        
      
          <FormControl>
        
            <TextField
                  
              label="Album Title"
              placeholder="i.e. 'The White Album'"
              onChange={enterNewAlbum('title')}
              value={newAlbum.title}
              multiline className={textfield}
            />
        
            <TextField
            
              label="Release Range"
              placeholder="i.e. 'summer 2022'"
              onChange={enterNewAlbum('release_range')}
              value={newAlbum.release_range}
              multiline className={textfield}
            />

            <TextField
            
            label="Primary Style"
            placeholder="i.e. 'Indie Rock'"
            onChange={enterNewAlbum('primary_style')}
            value={newAlbum.primary_style}
            multiline className={textfield}
          />    
                    
        </FormControl> 
          
        <FormControl>
          <div>
          
            <Button 
              
              onClick={handleCancel} 
              variant="contained" 
              size="small" 
              className={dialogButtons}
            >
          
              <Cancel/>

            </Button>
            
            <Button 
              
              
              variant="contained" 
              size="small" 
              className={dialogButtons}
            >
          
              <Backup/>

            </Button>
          </div>
        </FormControl> 
      
        </div>

        

      </form>

    </FormControl>
  </>
    
  );
}

export default AddAlbum;