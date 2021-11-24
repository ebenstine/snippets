import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent, Grid, Typography, Button } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Edit from '@material-ui/icons/Edit';
import Delete from '@material-ui/icons/Delete';
import useStyles from './SongDetailsComponents/SongDetailsStyles';
import SongDetailsMenu from './SongDetailsComponents/SongDetailsMenu';
import SongTitle from './SongDetailsComponents/SongTitle';
import SongDelete from './SongDetailsComponents/SongDelete';

function SongDetails(){
    
    const { title, root, card, card1, card2, card3, paper, cardText, cardContent, buttons, menuDots, more } = useStyles();
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
                <>
                    <div key={song.id}>
                    {song.priority === '1' ?
                    <Card spacing={1} className={card1}  raised={true}>
                        
                    
                    <div className={menuDots}>
                    
                   
                
                    <SongDetailsMenu/>
          
                    
                    
                    </div>
                    
                   

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
                     
      

                    
                    </CardContent>
                    
                    
                       
                    
                    
                    
                    </Card> : 
                    song.priority === '2' ?
                    <Card spacing={1} className={card2}  raised={true}>
                    <div className={menuDots}>
                    
                    <SongDetailsMenu/>
                  
                    </div>
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
      

                    
                    </CardContent>
                    
                      
                    
                    
                    
                    </Card> :
                    song.priority === '3' ?
                    <Card 
                        spacing={1} 
                        className={card3}  
                        raised={true}>
                    <div className={menuDots}>
                    
                    <SongDetailsMenu/>
                    
                    </div>
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

                    
                    </CardContent>
                    
                    
                    
                    </Card> :
                    <Card
                        className={card}
                        spacing={1} 
                        raised={true}>
                            <div className={menuDots}>
                    
                    <SongDetailsMenu/>
                    
                    </div>
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

                    
                    </CardContent>
                    
                       
                    
                    
                    
                    </Card> }
                    </div>
                    <br></br>
                    <br></br>
                    
                    <div>
                    <Button variant="contained" className={buttons} onClick={() => handleRevise(song.id)}><Edit/></Button>
                    
                    <SongDelete/>
                    </div>
                    
                </>
                )
            })}
                    
                    
            
                    </section>

            </Paper> 
        </div>
        
    )
}
export default SongDetails;

