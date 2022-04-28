import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Card, CardContent } from '@material-ui/core';
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

    useEffect(() => {
        
        dispatch ({
            type: 'FETCH_SONG_DETAILS',
            payload: params.id,
        });
    }, []);
    const songDetails = useSelector((store) => store.songDetails)


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