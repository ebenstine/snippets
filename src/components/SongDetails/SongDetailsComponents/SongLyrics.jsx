import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {  Button, Typography, FormControl } from '@material-ui/core';
import { TextField } from '@mui/material';
import useStyles from './SongLyricsStyles';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';


function SongLyrics() {
    const songs = useSelector (store => store.songs);
    const songDetails = useSelector(store => store.songDetails);
    const dispatch = useDispatch();
    const params = useParams();
    const history = useHistory();
    const { 
            textField, 
            buttons, 
            words, 
            root, 
            actions,
            lyricBlock1,
            lyricBlock2,
            lyricBlock3,
            lyricBlock,
            editedLyricBlock1,
            editedLyricBlock2,
            editedLyricBlock3,
            editedLyricBlockUncertain,
            lyricText

        } = useStyles();

    const [ editable, setEditable ] = useState(false);
    const [ updated, setUpdated ] = useState(false);
    console.log(params);

    let song = {
      lyrics: songDetails.lyrics,
    };

    

    
    const [reviseDetails, setReviseDetails] = useState(song);
  
  
    const handleChange = (event) => {
      setReviseDetails({ ...reviseDetails, [event.target.name]: event.target.value })
    };

    const handleEditable = () => {
        setEditable(editable => !editable)
    }
  
    const handleCancel = () => {
        history.push(`/songDetails/${params.id}`)
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
                                        label="Update Lyrics" 
                                        name="lyrics"
                                        onDoubleClick={handleEditable}
                                        margin="dense" 
                                        multiline className={textField} 
                                        onChange={handleChange}
                                        
                                    />
                                    
                                        <div className={actions}> 
                                    
                                            <Button 
                                                
                                                className={buttons} 
                                                onClick={handleEditable}>
                                                <Cancel/>

                                            </Button>
                                    
                                            <Button 
                                                
                                                className={buttons} 
                                                variant="filled" 
                                                type="submit">
                                                <CheckCircle/>
                                            
                                            </Button>
                                    
                                        </div>

                                </form>
                            
                            </FormControl>
                            
                            
                        :

                            <div onDoubleClick={handleEditable}>
                            
                                {updated ?

                                    <div key={song.id}>

                                            <div 

                                                className={
                                                    song.priority === '1' ?
                                                        editedLyricBlock1:
                                                    song.priority === '2' ?
                                                        editedLyricBlock2:
                                                    song.priority === '3' ?
                                                        editedLyricBlock3:

                                                        editedLyricBlockUncertain
                                                }
                                            
                                            >
                                
                                                <Typography 
                                                    
                                                    //variant="caption" 
                                                    component="span" 
                                                    className={words}
                                
                                                >
                                
                                                    {`${reviseDetails.lyrics}`}
                                    
                                                </Typography>

                                            </div>

                                    </div>    
                                :
                                    <div 
                                        
                                        className=
                                            {song.priority === '1' ?
                                                lyricBlock1:
                                            song.priority === '2' ?
                                                lyricBlock2:
                                            song.priority === '3' ?
                                                lyricBlock3:

                                                lyricBlock
                                            }
                                    >

                                        <Typography 
                                            component="p"
                                            
                                            className={lyricText}>
                                            {song.lyrics}

                                        </Typography>
                                    </div>
                                    
                                }
                            </div>
                        }
        
                    </>
                )

            })}
        </>
    )
}

export default SongLyrics;