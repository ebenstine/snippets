import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent, Typography, Button, FormControl } from '@material-ui/core';
import { useEffect, useState } from 'react';




import useStyles from './InactiveSongDetailsStyles';
import SongDetailsMenu from '../SongDetails/SongDetailsComponents/SongDetailsMenu';
import Delete from '@material-ui/icons/Delete';
import InactiveArchiveStatus from './InactiveArchiveStatus';



function InactiveSongDetails(){
    
    const { 
            
            title, 
            root, 
            card, 
            paper, 
            cardText, 
            cardContent,  
            menuDots, 
            

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
    const songs = useSelector((store) => store.songs)
    
    
return (
        

    <>
            
        <Paper className={paper} elevation={10}>
            
            <section className={root}>
                    
                {songDetails.map((song) => {
                        
                    return (

                        <>
                        {song.is_active === false ?
                            
                            
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
                                <br></br>
                                <br></br>
                                
                                <InactiveArchiveStatus/>
                                    
                            </div> 
                        :
                        
                        null
                        
                        } 

                        
                        </>
                               
                        )
                    })} 

                </section>
            
            </Paper>

        </>

    )
}

        
export default InactiveSongDetails; 