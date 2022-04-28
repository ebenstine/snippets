import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Paper, MenuItem, Button, Typography, Select, FormControl } from '@material-ui/core';
import {TextField} from '@mui/material';
import useStyles from './SongProductionIdeasStyles';
import { CheckCircle } from '@material-ui/icons';
import { Cancel } from '@material-ui/icons';




function SongProductionIdeas() {
    const songDetails = useSelector(store => store.songDetails);
    const dispatch = useDispatch();
    const params = useParams();
   
    const { 
            textField, 
            buttons, 
            notes, 
            notesDiv1,
            notesDiv2,
            notesDiv3,
            notesDivUncertain,
            notesBlock1,
            notesBlock2,
            notesBlock3,
            notesBlockUncertain,
            root, 
            actions,
            cardText 

        } = useStyles();

    const [ editable, setEditable] = useState(false);
    const [ updated, setUpdated ] = useState(false);
    console.log(params);
    let song = {
      performance_notes: songDetails.performance_notes
  
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
                            <FormControl  >
                                <form className={root} onSubmit={handleSubmit} autoComplete="off" >
                                    <TextField 
                                        label="Update Production Ideas" 
                                        name="production_ideas"
                                        
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
                                        <div style={{display:'flex', flexWrap: 'wrap'}}>
                                            <b><img style={{width:12, height:12}} src="sound-faders.png"></img></b> &nbsp;
                                                <Typography variant="caption" style={{color:'#233d4d', borderBottom: '1px solid #6ca0ad'}}>
                                                        Production Ideas:
                                                </Typography>


                                        </div>
                                
                                        
                                    
                                            <div className=
                                                {song.priority === '1' ?
                                                    notesDiv1 :
                                                        song.priority === '2' ?
                                                            notesDiv2 :
                                                                song.priority === '3' ?
                                                                    notesDiv3 :
                                                                        notesDivUncertain
                                                }
                                                    
                                            >
                                        
                                
                                                <Typography 
                                                    
                                                    component="p" 
                                                    className={notes}>
                                                
                                                
                                                {`${reviseDetails.production_ideas}`}

                                                </Typography>
                                            </div>
                                    </>
                                    
                                :

                                    <>
                                        <div style={{display:'flex', flexWrap:'wrap'}}>
                                            <b>
                                                <img 
                                                    style={{width:12, height:12}} 
                                                    src="productionIdeas.png">
                                                </img>
                                            </b> &nbsp;
                                            
                                
                                            <Typography 
                                                variant="caption" 
                                                className={notes}
                                            >
                                            
                                            Production Ideas:
                                        
                                            </Typography>


                                        </div>
                                        

                                        <div 
                                            className=
                                            {song.priority === '1' ?
                                            notesBlock1 :
                                                song.priority === '2' ?
                                                    notesBlock2 :
                                                        song.priority === '3' ?
                                                            notesBlock3 :
                                                                notesBlockUncertain
                                            }
                                        >
                                                
                                            <Typography

                                                component = "p" 
                                                className= {cardText}
                                                
                                            >
                                            
                                                
                                                {song.production_ideas}

                                            </Typography>
                                        </div>
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



export default SongProductionIdeas;