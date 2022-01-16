import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent, Typography, Button, HelperText } from '@material-ui/core';
import { useEffect, useState } from 'react';
import useStyles from './SongDetailsStyles';
import SongDetailsMenu from './SongDetailsMenu';
import SongTitle from './SongTitle';
import SongLyrics from './SongLyrics'
import SongInstrumentNotes from './SongInstrumentNotes';
import SongPerformanceNotes from './SongPerformanceNotes';
import SongStatus from './SongStatus';


export default function ActiveSongDetails(){

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
    

} = useStyles();



const params = useParams();
const dispatch = useDispatch();
const history = useHistory();
const [ editTitle, setEditTitle] = useState(false);
const [ editLyrics, setEditLyrics] = useState(false);
const [ editINotes, setEditINotes] = useState(false);
const [ editPNotes, setEditPNotes] = useState(false);


console.log(params);


useEffect(() => {
    
    dispatch ({
        type: 'FETCH_SONG_DETAILS',
        payload: params.id,
    });
}, []);
const songDetails = useSelector((store) => store.songDetails)
const songs = useSelector((store) => store.songs)


const handleEditTitle = () => {
    setEditTitle(editTitle => !editTitle)
}
const handleEditLyrics = () => {
    setEditLyrics(editLyrics => !editLyrics)
}
const handleEditINotes = () => {
    setEditINotes(editINotes=> !editINotes)
}
const handleEditPNotes = () => {
    setEditPNotes(editPNotes => !editPNotes)
}

return (
        
    <>
        
        
        {songDetails.map((song) => {
                


                return (
                    <>

                             
                        <Paper className={paper} elevation={10}>
            
                            <section className={root}>
                                <div key={song.id}>
                                    
                                    {song.priority === '1' ?
                        
                                        <Card 
                                            spacing={1} 
                                            className={card1}  
                                            raised={true}
                                        >
                        
                                            <div className={menuDots}>
                    
                                                <SongDetailsMenu/>
                            
                                            </div>
                    
                   

                                            <CardContent className={cardContent}>
                                    
                                                {editTitle ?
                                        
                                                    <SongTitle/> :
                                        
                                                        <div onDoubleClick={handleEditTitle}>
                            
                                                            <Typography 
                                                                variant="overline" 
                                                                className={title}>
                                                                {song.title}

                                                            </Typography>

                                                        </div>
                                                }
                        
                                                <br></br>

                                                {editLyrics ?
                                        
                                                    <SongLyrics/> :

                                                        <div onDoubleClick={handleEditLyrics}>

                                                            <Typography 
                                                                component = "p" 
                                                                className={cardText}>
                                                                {song.lyrics}

                                                            </Typography>
                                                        </div>
                                                }
                        
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                        
                                                {editINotes ?
                                            
                                                    <SongInstrumentNotes/> :

                                                        <div onDoubleClick={handleEditINotes}>

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
                                                }

                                                <br></br>

                                                {editPNotes ?

                                                    <SongPerformanceNotes/> :

                                                        <div onDoubleClick={handleEditPNotes}>

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
                                                }
                                        

                                                <br></br>
                     
                                            </CardContent>
                    
                                        </Card> 
                                        
                                        : 
                    
                    
                                    song.priority === '2' ?
                        
                                        <Card 
                                            spacing={1} 
                                            className={card2}  
                                            raised={true}
                                        >
                        
                                            <div className={menuDots}>
                    
                                                <SongDetailsMenu/>
                            
                                            </div>
                    
                   

                                            <CardContent className={cardContent}>
                                    
                                                {editTitle ?
                                        
                                                    <SongTitle/> :
                                        
                                                        <div onDoubleClick={handleEditTitle}>
                            
                                                            <Typography 
                                                                variant="overline" 
                                                                className={title}>
                                                                {song.title}

                                                            </Typography>

                                                        </div>
                                                }
                        
                                                <br></br>

                                                {editLyrics ?
                                        
                                                    <SongLyrics/> :

                                                        <div onDoubleClick={handleEditLyrics}>

                                                            <Typography 
                                                                component = "p" 
                                                                className={cardText}>
                                                                {song.lyrics}

                                                            </Typography>
                                                        </div>
                                                }
                        
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                        
                                                {editINotes ?
                                            
                                                    <SongInstrumentNotes/> :

                                                        <div onDoubleClick={handleEditINotes}>

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
                                                }

                                                <br></br>

                                                {editPNotes ?

                                                    <SongPerformanceNotes/> :

                                                        <div onDoubleClick={handleEditPNotes}>

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
                                                }
                                        

                                                <br></br>
                     
                                            </CardContent>
                    
                                        </Card> 
                                    
                                        :

                                    song.priority === '3' ?
                        
                                        <Card 
                                            spacing={1} 
                                            className={card3}  
                                            raised={true}
                                        >
                        
                                            <div className={menuDots}>
                    
                                                <SongDetailsMenu/>
                            
                                            </div>
                    
                   

                                            <CardContent className={cardContent}>
                                    
                                                {editTitle ?
                                        
                                                    <SongTitle/> :
                                        
                                                        <div onDoubleClick={handleEditTitle}>
                            
                                                            <Typography 
                                                                variant="overline" 
                                                                className={title}>
                                                                {song.title}

                                                            </Typography>

                                                        </div>
                                                }
                        
                                                <br></br>

                                                {editLyrics ?
                                        
                                                    <SongLyrics/> :

                                                        <div onDoubleClick={handleEditLyrics}>

                                                            <Typography 
                                                                component = "p" 
                                                                className={cardText}>
                                                                {song.lyrics}

                                                            </Typography>
                                                        </div>
                                                }
                        
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                        
                                                {editINotes ?
                                            
                                                    <SongInstrumentNotes/> :

                                                        <div onDoubleClick={handleEditINotes}>

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
                                                }

                                                <br></br>

                                                {editPNotes ?

                                                    <SongPerformanceNotes/> :

                                                        <div onDoubleClick={handleEditPNotes}>

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
                                                }
                                        

                                                <br></br>
                     
                                            </CardContent>
                    
                                        </Card>
                                    
                                        :

                                        <Card 
                                            spacing={1} 
                                            className={card}  
                                            raised={true}
                                        >
                    
                                            <div className={menuDots}>
            
                                                <SongDetailsMenu/>
                    
                                            </div>
            
           

                                            <CardContent className={cardContent}>
                                                
                                                {editTitle ?
                                
                                                    <SongTitle/> :
                                
                                                        <div onDoubleClick={handleEditTitle}>
                    
                                                            <Typography 
                                                                variant="overline" 
                                                                className={title}>
                                                                {song.title}

                                                            </Typography>

                                                        </div>
                                                }
                
                                                <br></br>

                                                {editLyrics ?
                                
                                                    <SongLyrics/> :

                                                        <div onDoubleClick={handleEditLyrics}>

                                                            <Typography 
                                                                component = "p" 
                                                                className={cardText}>

                                                                {song.lyrics}

                                                            </Typography>
                                                        </div>
                                                }
                
                                                <br></br>
                                                <br></br>
                                                <br></br>
                                                <br></br>
                
                                                {editINotes ?
                                    
                                                    <SongInstrumentNotes/> :

                                                        <div onDoubleClick={handleEditINotes}>

                                                            <Typography 
                                                                component = "p" 
                                                                className={cardText}>

                                                                    <span style={{color:"#1d778d"}}>▶</span>&nbsp;
                                                                    Instrument Notes:
                                                                    {' '}
                                                                    {song.instrument_notes}

                                                            </Typography>

                                                        </div>
                                                }

                                                <br></br>

                                                {editPNotes ?

                                                    <SongPerformanceNotes/> :

                                                        <div onDoubleClick={handleEditPNotes}>

                                                            <Typography 
                                                                component = "p" 
                                                                className={cardText}>

                                                                    <span style={{color:"#1d778d"}}>▶</span>&nbsp;
                                                                    Performance Notes:
                                                                    {' '}
                                                                    {song.performance_notes}

                                                            </Typography>
                                                        </div>
                                                }
                                

                                                <br></br>
             
                                            </CardContent>
            
                                        </Card> 
                                    }   
                                    
                                </div>
                    
                    
                                <br></br>
                                <br></br>
                                
                            <SongStatus/>
                                
                    
                            </section>

                        </Paper> 
                    
                    </>    
                )

            })}
        </>
    )
}