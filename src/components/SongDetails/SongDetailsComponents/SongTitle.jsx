import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import useStyles from './SongTitleStyles';
import { Button, Typography } from '@material-ui/core';
import { TextField } from '@mui/material';
import { FormControl } from '@material-ui/core';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';

function SongTitle() {
    const songDetails = useSelector(store => store.songDetails);
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const { textField, buttons, title, title1, title2, title3, root, actions } = useStyles();
    const [ editable, setEditable] = useState(false);
    const [ updated, setUpdated ] = useState(false);
    console.log(params);
    let song = {
      title: songDetails.title
  
    };
  
    const [reviseDetails, setReviseDetails] = useState(song);
  
  
    const handleChange = (event) => {
      setReviseDetails({ ...reviseDetails, [event.target.name]: event.target.value })
    };

    const handleEditable = () => {
        setEditable(editable => !editable)
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
      setEditable(editable => !editable);
      setUpdated(updated => !updated);
    }
  
    return (
        
        <>
                 
            {songDetails.map((song) => {

                return (
                
                    <>
                
                        {editable ? 
                        
                        
                            <FormControl>
                                <form className={root} onSubmit={handleSubmit} autoComplete="off" >
                                    <TextField 
                                        label="Update Title" 
                                        name="title"
                                        
                                        onDoubleClick={handleEditable}
                                        margin="dense" 
                                        multiline className={textField} 
                                        onChange={handleChange}
                                        
                                        />
                                    <div className={actions}> 
                                    <Button className={buttons} onClick={handleEditable}><Cancel/></Button>
                                    <Button className={buttons} variant="filled" type="submit"><CheckCircle/></Button>
                                    </div>
                                </form>
                            </FormControl>
                        :
                        
                            <div onDoubleClick={handleEditable}>
                                {updated ?
                                
                                    <>
                                        <Typography 
                                            variant="overline" 
                                            className=
                                            {song.priority === '1' ?
                                                title1 :
                                             song.priority === '2' ?
                                                title2 :
                                             song.priority === '3' ?
                                                title3 :

                                                title 
                                            }
                                        >
                                            
                                        {`${reviseDetails.title}`}
                                        </Typography>
                                    </>

                                :

                                    <>
                                                    
                                        <Typography 
                                            variant="overline" 
                                            className=
                                                {song.priority === '1' ?
                                                    title1 :
                                                 song.priority === '2' ?
                                                    title2 :
                                                 song.priority === '3' ?
                                                    title3 :

                                                    title 
                                                }
                                            >
                                            {song.title}

                                        </Typography>
                                        
                                        

                                    </>

                                }
                            </div>
                        }

                    </>
                )
            })}
        </>
    )
}



export default SongTitle;