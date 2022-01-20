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
    lyricText,
    lyricBlock1,
    lyricBlock2,
    lyricBlock3,
    lyricBlockUncertain,
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
//add state handler for status? 

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
//the structure of this conditional rendering is:
/*1. if the song's priority is x, show that song's accordant background color.
  2. if the edit mode for song property x is on, pull in the component for that property, which,
  3. itself asks if edit mode is turned on, and if it is, shows the input form,
  4. or otherwise, shows the edited text.
  5. if the edit mode for the property is off, the original inputted data is shown.
*/
//the conditional rendering for each song component and whether it is being edited, or has been edited, is pulled in from refactored components

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

                                                        <div onDoubleClick={handleEditLyrics} 
                                                             className={lyricBlock1}
                                                        >

                                                            <Typography 
                                                                component="p"
                                                                
                                                                className={lyricText}>
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
                                                                component = "span" 
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
                                                                component = "span" 
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

                                                        <div onDoubleClick={handleEditLyrics}
                                                             className={lyricBlock2}
                                                             
                                                        >

                                                            <Typography 
                                                                component = "span" 
                                                                className={lyricText}>
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
                                                                component = "span" 
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
                                                                component = "span" 
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

                                                        <div onDoubleClick={handleEditLyrics}
                                                             className={lyricBlock3}
                                                        >

                                                            <Typography 
                                                                component = "span" 
                                                                className={lyricText}>
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
                                                                component = "span" 
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
                                                                component = "span" 
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

                                                        <div onDoubleClick={handleEditLyrics}
                                                             className={lyricBlockUncertain}
                                                        >

                                                            <Typography 
                                                                component = "span" 
                                                                className={lyricText}>

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
                                                                component = "span" 
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
                                                                component = "span" 
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
                            {/*pulls in conditional rendering for status designation from refactored component*/}    

                            <SongStatus/>
                                
                    
                            </section>

                        </Paper> 
                    
                    </>    
                )

            })}
        </>
    )
}