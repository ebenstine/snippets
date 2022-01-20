import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { TextField, Button, Typography, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';



const useStyles = makeStyles(() => ({
    root: {

        '& label.Mui-focused': {
            color: '#2a4f64',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#3b95ac',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#2a4f64',
                
            },
            '&:hover fieldset': {
                borderColor: '#2a4f64',
                
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
        marginTop: '-.75em',
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
        
    }
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
            editedLyricBlock1,
            editedLyricBlock2,
            editedLyricBlock3,
            editedLyricBlockUncertain

        } = useStyles();

    const [ editable, setEditable] = useState(true);
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
    }
  
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
                                    onClick={handleCancel}>
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

                <>
            
                    {songDetails.map((song) => {
                     
                        return (

                            <div key={song.id}>
                    
                                {song.priority === '1' ?

                                    <div 
                                        
                                        onDoubleClick={handleEditable} 
                                        className={editedLyricBlock1}
                                    
                                    >
                        
                                        <Typography 
                                            
                                            variant="caption" 
                                            component="span" 
                                            className={words}
                        
                                        >
                        
                                            {`${reviseDetails.lyrics}`}
                            
                                        </Typography>

                                    </div>

                                :
                                
                                song.priority === '2' ?
                    
                                    <div 
                                        
                                        onDoubleClick={handleEditable} 
                                        className={editedLyricBlock2}
                                    
                                    >
                                
                                        <Typography 
                            
                                            component="span" 
                                            className={words}
                        
                                        >
                        
                                            {`${reviseDetails.lyrics}`}
                        
                                        </Typography>
                    
                                    </div>

                                :
                    
                                song.priority === '3' ?
                    
                                    <div 
                                    
                                        onDoubleClick={handleEditable} 
                                        className={editedLyricBlock3}
                                    >
                        
                                        <Typography 
                            
                                            component="span" 
                                            className={words}
                        
                                        >
                                        
                                            {`${reviseDetails.lyrics}`}
                        
                                        </Typography>
                    
                                    </div>

                                :

                                    <div 
                                        
                                        onDoubleClick={handleEditable} 
                                        className={editedLyricBlockUncertain}
                                    >
                        
                                        <Typography 
                            
                                            component="span" 
                                            className={words}
                        
                                        >
                                        
                                            {`${reviseDetails.lyrics}`}
                        
                                        </Typography>
                    
                                    </div> 
                    
                                }

                            </div>
                   
                        )

                    })}
            
                </>
        
            }
        
        </>
    )
}

export default SongLyrics;