import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent, Grid, Typography, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import AddRecording from '../AddRecording/AddRecording';
import useStyles from './SongDetailsComponents/SongDetailsStyles';

function SongDetails(){
    
    const { title, root, card, paper,  } = useStyles();
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    

    
    
    
    console.log(params);

    useEffect(() => {
        
        dispatch ({
            type: 'FETCH_SONG_DETAILS',
            payload: params.id,
        });
    }, []);
    const songDetails = useSelector((store) => store.songDetails)

    //back button path home
    const handleBack = () => {
        console.log('back to songs')
        history.goBack();
    }
    
    const handleDelete = (songId) => {
        console.log(songId)
        dispatch ({
            type: 'DELETE_SONG',
            payload: songId
        })
        history.push('/songsList')
    }

    const handleRevise = (songId) => {
       
    history.push(`/reviseSong/${songId}`)
    }

    //button to go back, map through details with id
    return (
        <div>
            <Paper className={paper}>

            <section className={root}>
            {songDetails.map((song) => {
                return (
                    <Card spacing={1} raised={true}>
                    <CardContent className={card}>
                    
                    <div key={song.id}>
                    <Typography variant="overline" className={title}>{song.title}</Typography>
                    <Typography>▶ LYRICS: </Typography>
                            
                    <Typography variant="body1"> {song.lyrics}</Typography>  
                        <br></br>
                    <Typography> ▶ INSTRUMENTATION NOTES: </Typography>
                        <br></br>

                    <Typography variant="body1">{song.instrument_notes}</Typography>
                        <br></br>
                    <Typography> ▶ PERFORMANCE NOTES: </Typography>
                    
                    <Typography variant="body1">{song.performance_notes}</Typography>
                    
                    
                    {/*Will pull in the form from AddRecording component, but it is currently non-functional
                    <AddRecording
▶
                    />*/}


                    <Button variant="text" onClick={() => handleRevise(song.id)}>Update Details</Button>
                    <Button variant="text" onClick={() => handleDelete(song.id)}>Delete Song</Button>
                    <Button onClick={handleBack}>Back to List</Button>
                    </div>
                    </CardContent>
                    </Card>
                    
                )
            })}

            </section>
            
            
            
            </Paper> 
        </div>
    )
}
export default SongDetails;
