import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Paper, TextField, Button, Typography, Select, FormControl } from '@material-ui/core';
import useStyles from './ReviseSongStyles'

function ReviseSong() {
    const songDetails = useSelector(store => store.songDetails);
    const dispatch = useDispatch();
    const history = useHistory();
    const { root, inputs, paper, textField, cardContent, title } = useStyles();

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
        history.push('/home');
    }

    const test = () => {
        console.log('editDetails', revisedSong);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        let revisedSong= reviseDetails;
        revisedSong = {...revisedSong};
        console.log('new song revisions made in', revisedSong);
        dispatch({
            type: 'REVISE_SONG',
            payload: revisedSong
        });
        history.push('/songDetails/:id');
    }



    return (
    <div>
      <Paper className={paper} onDoubleClick={e => e.stopPropagation()} elevation={10}>
        <FormControl >
          <form className={root} onSubmit={handleSubmit} noValidate autoComplete="off" >
            <div className={cardContent}>
            <Typography variant = "h4" component="h5" className={title}>Revise Details Here</Typography>
            <TextField
              label="Title"
              onChange={handleChange}
              value={reviseDetails.title}
              multiline className={textField}
            />
          
            <TextField
              label="Instrument Notes"
              onChange={handleChange}
              value={reviseDetails.instrument_notes}
              multiline className={textField}

            />
         
          <TextField
              label="Performance Notes"
              onChange={handleChange}
              value={reviseDetails.performance_notes}
              multiline className={textField}

            />
          
          <TextField
              label="Lyrics"
              onChange={handleChange}
              value={reviseDetails.lyrics}
              multiline className={textField}
            />
          
          <Select
              name="priority"
              onChange={handleChange}
              value={reviseDetails.priority}
              >
                <option defaultValue={''}>Select Completion Priority</option>
                <option value={'1'}>First</option>
                <option value={'2'}>Second</option>
                <option value={'3'}>Third</option>
          </Select>
          {/*<Uploader 
                
            uploadComplete={uploadComplete}
              
          />*/}
         
          
          <FormControl>
            <section>
            <Button variant="contained" onClick={handleCancel} className={inputs} > CANCEL </Button>
            <Button variant="contained" type="submit" className={inputs}> SAVE </Button>
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