import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, TextField, MenuItem, Button, Typography, Select, FormControl } from '@material-ui/core';
import useStyles from './ReviseSongStyles'
import AddRecording from '../AddRecording/AddRecording';

function ReviseSong() {
    const songDetails = useSelector(store => store.songDetails);
    const dispatch = useDispatch();
    const params = useParams(); 
    const history = useHistory();
    const { root, buttons, paper, textField, cardContent, title } = useStyles();
    console.log(params);
    let song = {
        title: songDetails.title,
        instrument_notes: songDetails.instrument_notes,
        performance_notes: songDetails.performance_notes,
        lyrics: songDetails.lyrics,
        priority: songDetails.priority
        
    };

    const [reviseDetails, setReviseDetails] = useState(song);


    const handleChange = (event) =>{
        setReviseDetails({...reviseDetails, [event.target.name]:event.target.value })
      };

    

    const handleCancel = () => {
        history.push('/songsList');
    }

    
    const handleSubmit = (event) => {
        event.preventDefault();
        let revisedSong= reviseDetails;
        revisedSong = {...revisedSong, id:params.id};
        console.log('new song revisions made in', revisedSong);
        dispatch({
            type: 'REVISE_SONG',
            payload: revisedSong
        });
        history.push(`/songDetails/${params.id}`);
    }


    ///GOTTA ADD NAME TO THOSE TEXTFIELDS BRO???????/////
    return (
    <div>
      <Paper className={paper} onDoubleClick={e => e.stopPropagation()} elevation={10}>
        <FormControl >
          <form className={root} onSubmit={handleSubmit} noValidate autoComplete="off" >
            <div className={cardContent}>
            <Typography variant = "h5" component="h5" className={title}>Update Song Details</Typography>
            <TextField
              label="Title" 
              name="title"
              onChange={handleChange}
              value={reviseDetails.title}
              multiline className={textField} 
            />
          
            <TextField
              label="Instrument Notes"
              name="instrument_notes"
              onChange={handleChange}
              value={reviseDetails.instrument_notes}
              multiline className={textField}

            />
         
          <TextField
              label="Performance Notes"
              name="performance_notes"
              onChange={handleChange}
              value={reviseDetails.performance_notes}
              multiline className={textField}

            />
          
          <TextField
              label="Lyrics"
              name="lyrics"
              onChange={handleChange}
              value={reviseDetails.lyrics}
              multiline className={textField}
            />
          
          <Select
              name="priority"
              onChange={handleChange}
              value={reviseDetails.priority}
              >
                <MenuItem defaultValue={''}>Select Completion Priority</MenuItem>
                <MenuItem value={'1'}>First</MenuItem>
                <MenuItem value={'2'}>Second</MenuItem>
                <MenuItem value={'3'}>Third</MenuItem>
          </Select>
          <AddRecording/>
         
          
          <FormControl>
            <section>
            <Button variant="contained" onClick={handleCancel} className={buttons} > CANCEL </Button>
            <br></br>
            <Button variant="contained" type="submit" className={buttons}> SAVE </Button>
            </section>
          </FormControl>
          
        </div>
      </form>
    </FormControl>
   </Paper>
  </div>
  );
}

export default ReviseSong;