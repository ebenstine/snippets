import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent, Grid, Typography, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import AddRecording from '../AddRecording/AddRecording';
import useStyles from './SongDetailsComponents/SongDetailsStyles';

function SongDetails(){
    
    const { title, root, card, paper, cardText, cardContent, buttons } = useStyles();
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
            <Paper className={paper} elevation={10}>

            <section className={root}>
            {songDetails.map((song) => {
                return (
                    <div key={song.id}>
                    <Card spacing={1} className={card}  raised={true}>
                    <CardContent className={cardContent}>
                    
                     
                    <Typography variant="overline" className={title}>{song.title}</Typography>
                    <Typography className={cardText} component="p"> 
                        <br></br>
                        {song.lyrics}</Typography>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        
                        
                    <Typography className={cardText}> ▶ Instrumentation Notes:{'  '}
                        
                        {song.instrument_notes}</Typography>
                        <br></br>
                    <Typography className={cardText}> ▶ Performance Notes:{'  '}
                        
                        {song.performance_notes}</Typography>
                        <br></br>
                        
                    
                    {/*Will pull in the form from AddRecording component, but it is currently non-functional*/}
                    {/*<AddRecording/>*/}
                     
      

                    
                    </CardContent>
                       
                    
                    
                    
                    </Card>
                    <br></br>
                    <br></br>
                    <section>
                    <Button variant="contained" className={buttons} onClick={() => handleRevise(song.id)}>Update Details</Button>
                    
                    <Button variant="contained" className={buttons} onClick={() => handleDelete(song.id)}>Delete Song</Button> 
                    </section>
                    </div>
                )
            })}
                    
                    
            
                    </section>

            </Paper> 
        </div>
        
    )
}
export default SongDetails;
