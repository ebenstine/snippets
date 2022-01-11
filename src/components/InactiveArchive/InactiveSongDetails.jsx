import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent, Typography, Button, HelperText } from '@material-ui/core';
import { useEffect, useState } from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Archive from '@material-ui/icons/Archive';
import Cancel from '@material-ui/icons/Cancel';
import Feedback from '@material-ui/icons/Feedback';
import QueueMusic from '@material-ui/icons/QueueMusic';


import useStyles from './InactiveSongDetailsStyles';
import SongDetailsMenu from '../SongDetails/SongDetailsComponents/SongDetailsMenu';
import Delete from '@material-ui/icons/Delete';



function InactiveSongDetails(){
    
    const { 
            
            title, 
            root, 
            card, 
            card1, 
            card2, 
            card3, 
            paper, 
            cardText, 
            cardContent,  
            menuDots, 
            button, 
            dialog,
            dialogText,
            dialogContent, 
            deleteButton,
            activateButton

        } = useStyles();

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

      

    /*const handleArchive = (songId) => {
        console.log(songId)
        dispatch ({
            type: 'REVISE_SONG',
            payload: songId
        })
       history.push/songsList
    }*/

    const handleDelete = (songId) => {
        console.log(songId)
        dispatch ({
            type: 'DELETE_SONG',
            payload: songId
        })
        history.push('/songsList')
    }

    
    

    
    return (
        

        <div>
            
            <Paper className={paper} elevation={10}>
            
                <section className={root}>
                    
                    {songDetails.map((song) => {
                        
                        return (
                             
                                <div key={song.id}>
                                    
                        
                                        <Card 
                                            spacing={1} 
                                            className={card}  
                                            raised={true}
                                        >
                        
                                            <div className={menuDots}>
                    
                                                <SongDetailsMenu/>
                            
                                            </div>
                    
                   

                                            <CardContent className={cardContent}>
                                    
                                                <div>
                            
                                                    <Typography 
                                                        
                                                        variant="overline" 
                                                        className={title}>
                                                        {song.title}

                                                    </Typography>

                                                </div>
                                                
                                                <br></br>

                                                <div>

                                                    <Typography 
                                                        
                                                        component = "p" 
                                                        className={cardText}>
                                                        {song.lyrics}

                                                    </Typography>
                                                        
                                                </div>
                                                
                        
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                        
                                                
                                            
                                                    

                                                <div>

                                                    <Typography 
                                                                
                                                        component = "p" 
                                                        className={cardText}>

                                                            <span style={{color:"#1d778d"}}>▶</span>
                                                                
                                                                &nbsp;
                                                                Instrument Notes:
                                                                {' '}
                                                                {song.instrument_notes}

                                                    </Typography>

                                                </div>
                                                

                                                <br></br>

                                               

                                                      
                                                <div>

                                                    <Typography 
                                                                
                                                        component = "p" 
                                                        className={cardText}>

                                                        <span style={{color:"#1d778d"}}>▶</span>

                                                            &nbsp;
                                                            Performance Notes:
                                                            {' '}
                                                            {song.performance_notes}

                                                    </Typography>

                                                </div>
                                               
                                        

                                                <br></br>
                     
                                            </CardContent>
                    
                                        </Card>
                                
                                    <div>
                                    
                                    <br></br>
                                    <br></br>
                                
                                
                                        <Button 
                                        
                                            className={activateButton} 
                                            variant="contained" 
                                            //onClick={handleClickOpen}
                                        >
                                            <QueueMusic/>
                                    
                                        </Button>

                                        <Button 
                                        
                                            className={deleteButton}
                                            variant="contained"
                                            onClick={() => handleDelete(song.id)}
                                        >
                                        
                                        <Delete/>


                                        </Button>
                                
                                    </div>   
                    
                                </div>
                            )
                        })} 
                    </section>
                </Paper>
        </div>
    )
}
        
export default InactiveSongDetails; 