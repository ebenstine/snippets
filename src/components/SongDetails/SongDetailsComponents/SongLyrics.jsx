import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import {  Button, Typography, FormControl } from '@material-ui/core';
import { TextField } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';



const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            color: '#2a4f64',
            border:'#2a4f64'
            //width: '25ch'
        },
        
        '& label.Mui-focused': {
            color: '#2a4f64',
            border: '#3b95ac'
        },

        '& .MuiInput-underline:before': {
            borderBottomColor: '#2a4f64',
    
        },

        '& .MuiInput-underline.Mui-selected': {
            borderBottomColor: '#2a4f64',
            
        },

        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
        }, 
            
        "& .MuiOutlinedInput-input": {
            color: "#2a4f64",
            borderBottomColor:'#2a4f64'
            //border: "2px solid #3b95ac"
            
        },
       
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            border: "1.5px solid#3b95ac",
            borderRadius: "3px 3px 3px 3px"
        },
        
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                color: '#3b95ac',
                //paddingLeft: '4em'
                
            },
            '& .Mui-selected': {

               borderColor: '3b95ac'

            },
            '&:hover fieldset': {
                border:' 1.5px solid #3b95ac' 
            },  
            '&:fieldset.Mui-focused': {
                border:' 1.5px solid #3b95ac'
            
            },
        },
    },

    textField: {
        
        width: '45ch',
        marginBottom: '1em',
        fontSize: 15
    },

    subheading: {
        marginLeft: '.5em',
        marginBottom: '1.5em',
        marginTop: '.5em'
    },
    actions: {
        marginBottom: '2em',
        
        marginLeft: '7.5em',
    },

    buttons:  {
        color: '#2a4f64'
    },

    words: {
        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        //borderBottom: '1.5px solid #6ca0ad',
        whiteSpace: 'pre-wrap',
        color: '#233d4d'
    },

    editedLyricBlock1: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#94d9eb',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '1em'

    },

    editedLyricBlock2: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#f8a058',
            cursor: 'pointer',
            //border: '1px solid #6ca0ad'
            
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '1em'
        
    },

    editedLyricBlock3: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#fcca60',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '1em'
        
    },

    editedLyricBlockUncertain: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#eb9292',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '1em'
        
    },

    lyricBlock1: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#94d9eb',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '1em',
        paddingTop: '1em'

    },

    lyricBlock2: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#f8a058',
            cursor: 'pointer',
            //border: '1px solid #6ca0ad'
            
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '1em',
        paddingTop: '1em'
        //border: '1px solid #6ca0ad',
  


    },

    lyricBlock3: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#fcca60',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '1em',
        paddingTop: '1em'

    },

    lyricBlockUncertain: {
        '&:hover': {
            //border: '1px solid #1d778d',
            backgroundColor: '#eb9292',
            cursor: 'pointer'
            },
        borderRadius: '3px',
        paddingRight: '.5em',
        paddingLeft: '.5em',
        paddingBottom: '1em',
        paddingTop: '1em'

    },

    lyricText: {

        fontFamily: 'Noto Sans TC, Tahoma, Geneva, Verdana, sans-serif',
        fontSize: 9.5,
        //borderBottom: '1px solid #6ca0ad',
        marginTop: 'auto',
        whiteSpace: 'pre-wrap',
        color: '#233d4d',
        
        
    },
}));

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

                                                        lyricBlock
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