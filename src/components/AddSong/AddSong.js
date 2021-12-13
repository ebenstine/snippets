import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Paper, MenuItem, TextField, Button, Typography, Select, FormControl, InputLabel, DialogTitle} from '@material-ui/core';
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
          menu,
          selectTitle,
          priority0, 
          priority1,
          priority2,
          priority3,
          setPriority1,
          setPriority2,
          setPriority3,
          
        
        } 
          
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
            <Typography variant = "h5" component="h5" className={title}>Add A New Song</Typography>
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
          <div className={menu}>
          
          <Select
              
              name="priority"
              onChange={enterNewSong('priority')}
              className={priority1}
              value={newSong.priority}
              >
                
                <DialogTitle defaultValue={'  '}className={selectTitle} >&nbsp;&nbsp;Assign Completion Priority&nbsp;&nbsp;</DialogTitle>
                <MenuItem value={'1'} className={setPriority1} >&nbsp;&nbsp;Group One&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'2'} className={setPriority2} >&nbsp;&nbsp;Group Two&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'3'} className={setPriority3} >&nbsp;Group Three</MenuItem>
            
          </Select> 
          
          </div>:
          newSong.priority ==='2' ?
          <div>
          <Select
              
              name="priority"
              onChange={enterNewSong('priority')}
              className={priority2}
              value={newSong.priority}
              >
                
                <DialogTitle defaultValue={''} className={selectTitle} >Assign Completion Priority</DialogTitle>
                <MenuItem value={'1'} className={setPriority1} >&nbsp;&nbsp;Group One&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'2'} className={setPriority2} >&nbsp;&nbsp;Group Two&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'3'} className={setPriority3} >&nbsp;Group Three</MenuItem>
            
            
          </Select> 
          </div>:
          newSong.priority ==='3' ?
          <div className={menu}>
          <Select

            name="priority"
            onChange={enterNewSong('priority')}
            className={priority3}
            value={newSong.priority}
              
              
              >
                <DialogTitle defaultValue={''} className={selectTitle} >Assign Completion Priority</DialogTitle>
                <MenuItem value={'1'} className={setPriority1} >&nbsp;&nbsp;Group One&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'2'} className={setPriority2} >&nbsp;&nbsp;Group Two&nbsp;&nbsp;</MenuItem>
                <MenuItem value={'3'} className={setPriority3} >&nbsp;Group Three</MenuItem>
            
            
          </Select> 
          </div>:
          <div className={menu}>
          <Select

            name="priority"
            onChange={enterNewSong('priority')}
            className={priority0}
            value={newSong.priority}
          >
            
            <DialogTitle className={selectTitle} >Assign Completion Priority</DialogTitle>
            <MenuItem value={'1'} className={setPriority1} >&nbsp;&nbsp;Group One&nbsp;&nbsp;</MenuItem>
            <MenuItem value={'2'} className={setPriority2} >&nbsp;&nbsp;Group Two&nbsp;&nbsp;</MenuItem>
            <MenuItem value={'3'} className={setPriority3} >&nbsp;Group Three</MenuItem>
            
          </Select>
          </div>}
          
          

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

