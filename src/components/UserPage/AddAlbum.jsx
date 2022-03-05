import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@material-ui/core/Button';

import { FormControl } from '@material-ui/core';
import { TextField } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './AddAlbumStyles'
import Cancel from '@material-ui/icons/Cancel';
import Backup from '@material-ui/icons/Backup';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';



const AddAlbum = ({ album }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {  root, dialogButtons, descriptionText  } = useStyles();
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

  const uploadComplete = (fileUrl) => {
    console.log('fileUrl upload complete', fileUrl);
      setNewRecording({...newRecording, id:params.id, src: fileUrl})
  }

  const toUserHome = () => {
    history.push('/songsList')
}

  return (
    
    
    <div>
      
      
        
      
          <FormControl>
        
            <form className={root}>
        
             
        
                  <TextField
                  
                    label={<DescriptionOutlinedIcon style={{color: '#1d778d'}}/>}
                    placeholder="Title"
                    onChange={enterNewAlbum('title')}
                    value={newAlbum.title}
                    multiline className={descriptionText}
                    
              
                  />
        
                    

               

            </form>

          </FormControl>
        
        
            
          
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

            

        
   
    </div>
    
  );
}

export default AddAlbum;