import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent, Typography, Button, HelperText } from '@material-ui/core';
import { useEffect, useState } from 'react';
import useStyles from './SongDetailsStyles';
import SongDetailsMenu from './SongDetailsMenu';
import SongTitle from './SongTitle';
import SongLyrics from './SongLyrics'
import SongWritingNotes from './SongwritingNotes';
import SongProductionIdeas from './SongProductionIdeas';
import SongStatus from './SongStatus';

export default function ActiveSongDetails(){

    const { 
                 
        root, 
        card, 
        card1, 
        card2, 
        card3, 
        paper,
        paper1,
        paper2,
        paper3, 
        cardContent,  
        menuDots, 

    } = useStyles();



    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    
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

                            <Paper 
                                className=
                                    {song.priority === '1' ?
                                        paper1:
                                    song.priority === '2' ?
                                        paper2:
                                    song.priority === '3' ?
                                        paper3:

                                        paper
                                    } 
                                elevation={10}>
                
                                <section className={root}>
                                    
                                    <div key={song.id}>
                            
                                            <Card 
                                                spacing={1} 
                                                className=
                                                    {song.priority === '1' ?
                                                        card1:
                                                     song.priority === '2' ?
                                                        card2:
                                                     song.priority === '3' ?
                                                        card3:
                                                     
                                                        card
                                                }       
                                                raised={true}
                                            >
                            
                                                <div className={menuDots}>
                        
                                                    <SongDetailsMenu/>
                                
                                                </div>
                        
                    

                                                <CardContent className={cardContent}>
                                                    
                                                    
                                            
                                                        <SongTitle/> 
                                                            <br></br>
                                                        <SongLyrics/> 
                                                            <br></br>
                                                        <SongWritingNotes/>
                                                            <br></br>
                                                        <SongProductionIdeas/>
                                                            <br></br>
                        
                                                </CardContent>
                        
                                            </Card> 
                                    </div>
                                    
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