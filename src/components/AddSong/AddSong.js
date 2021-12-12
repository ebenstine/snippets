import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Paper, MenuItem, TextField, Button, Typography, Select, FormControl } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import useStyles from './AddSongStyles'
import Uploader from '../Uploader/Uploader';
import Backup from '@material-ui/icons/Backup';
import Cancel from '@material-ui/icons/Cancel';


const AddSong = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { root, 
          inputs, 
          paper, 
          textField, 
          cardContent, 
          title, 
          priority, 
          priority1,
          priority2,
          priority3,
          setPriority } 
          
          = useStyles();

  const [url , setUrl] = useState ('no file was dropped');
  const [newSong, setNewSong] = useState({});


  const enterNewSong = (key) => (event) => {
    setNewSong({ ...newSong, [key]: event.target.value });
  };

  const handleSave = (event) => {
    event.preventDefault();
    dispatch({ 
      
      type: 'POST_NEW_SONG', 
      payload: newSong 
      
    });
    history.push('/songsList')
   };

  console.log(newSong);

  const uploadComplete = (fileUrl) => {
    console.log('fileUrl upload complete', fileUrl);
      setNewSong({...newSong, src: fileUrl})
  }

  const toUserHome = () => {
    history.push('/songsList')
}
  
  return (
    <div>
      <Paper className={paper} onDoubleClick={e => e.stopPropagation()} elevation={10}>
        <FormControl >
          <form className={root} onSubmit={handleSave} noValidate autoComplete="off" >
            <div className={cardContent}>
            <Typography variant = "h5" component="h5" className={title}>Submit A New Song</Typography>
            <TextField
              label="Title"
              onChange={enterNewSong('title')}
              value={newSong.title}
              
              multiline className={textField}
            />
          
            <TextField
              label="Instrument Notes"
              onChange={enterNewSong('instrument_notes')}
              value={newSong.instrument_notes}
              multiline className={textField}

            />
         
          <TextField
              label="Performance Notes"
              onChange={enterNewSong('performance_notes')}
              value={newSong.performance_notes}
              multiline className={textField}

            />
          
          <TextField
              label="Lyrics"
              onChange={enterNewSong('lyrics')}
              value={newSong.lyrics}
              multiline className={textField}
            />
          <br></br>
          {newSong.priority ==='1' ?
          <Select
              
              name="priority"
              onChange={enterNewSong('priority')}
              className={priority1}
              value={newSong.priority}
              placeholder="Assign Completion Priority"
              >
                <MenuItem defaultValue={'  '}className={setPriority} >&nbsp;&nbsp;Assign Completion Priority&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'1'} className={setPriority} >&nbsp;&nbsp;Group One&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'2'} className={setPriority} >&nbsp;&nbsp;Group Two&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'3'} className={setPriority} >&nbsp;Group Three</MenuItem>
            
          </Select> :
          newSong.priority ==='2' ?
          <Select
              
              name="priority"
              onChange={enterNewSong('priority')}
              className={priority2}
              value={newSong.priority}
              >
                <MenuItem defaultValue={''} className={setPriority} >Assign Completion Priority</MenuItem>
                <MenuItem value={'1'} className={setPriority} >&nbsp;&nbsp;Group One&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'2'} className={setPriority} >&nbsp;&nbsp;Group Two&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'3'} className={setPriority} >&nbsp;Group Three</MenuItem>
               
          </Select> :
          newSong.priority ==='3' ?
          <Select

              name="priority"
              onChange={enterNewSong('priority')}
              className={priority3}
              value={newSong.priority}
              >
                <MenuItem defaultValue={''} className={setPriority} >Assign Completion Priority</MenuItem>
                <MenuItem value={'1'} className={setPriority} >&nbsp;&nbsp;Group One&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'2'} className={setPriority} >&nbsp;&nbsp;Group Two&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'3'} className={setPriority} >&nbsp;Group Three</MenuItem>
            
          </Select> :
          <Select

          name="priority"
          onChange={enterNewSong('priority')}
          className={priority}
          value={newSong.priority}
          
          >
            <MenuItem className={setPriority} >Assign Completion Priority</MenuItem>
            <MenuItem value={'1'} className={setPriority} >&nbsp;&nbsp;Group One&nbsp;&nbsp;</MenuItem>
            <MenuItem value={'2'} className={setPriority} >&nbsp;&nbsp;Group Two&nbsp;&nbsp;</MenuItem>
            <MenuItem value={'3'} className={setPriority} >&nbsp;Group Three</MenuItem>
        
      </Select>}
          
          

          <Uploader 
            elevated={10}  
            uploadComplete={uploadComplete}
            
          />
         
          
          <FormControl>
            <div>
            <Button variant="contained" onClick={toUserHome} className={inputs} ><Cancel/></Button>
            
            <Button variant="contained" type="submit" /*onClick={toUserHome}*/ className={inputs}><Backup/></Button>
            </div>
          </FormControl>
          
        </div>
      </form>
    </FormControl>
   </Paper>
  </div>
  );
}

export default connect() (AddSong);

