
import React, { useEffect, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from './SongsListStyles';
import ColorCodeLegend from './ColorCodeLegend'
import Feedback from '@material-ui/icons/Feedback';

//import songDetails from '../../redux/reducers/songDetails.reducer';




function GroupThree() {

    const { 
            
            title, 
            title1, 
            title2, 
            title3, 
            player,
            player1,
            player2,
            player3, 
            card, 
            card1, 
            card2, 
            card3, 
            paper, 
            menuDots,
            blankPage,
            message,
            messageCard,
            messageDiv,
            feedback,
            heading,
            playIcon,
            hackButton
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const songs = useSelector((store) => store.songs);
    const albums = useSelector((store) => store.albums);
    const [ editTitle, setEditTitle] = useState(false);

    const [listView, setListView] = useState(true);
    console.log(songs);


    
    
    /*const handleState = () => {
        setListView(listView = !listView)
    }*/
    

    //get db info on page load
    useEffect(() => {
       
        dispatch({
            type: 'FETCH_SONGS', 
            type: 'FETCH_ALBUMS'
        
        });
        
    },[]);
    //push forward to details page on click

    const handleEditTitle = () => {
        setEditTitle(editTitle => !editTitle)
    }


    const handleAlbumDetails = (id) => {
        history.push(`/albumPreview/${id}`)
    }

    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }

    const goBack = () => {
        history.push(`/groupThree`)
    }

    
    




    //conditionally render cards with different background colors according to priority
    return (
       
       <>

                     
            <Paper className={paper} elevation={10}>
                
                <div className={menuDots}>

                    <ColorCodeLegend/>

                </div>

                    {albums.map((album) => {
                        return (
                            <>
                                {album === albums[2] ?
                                    editTitle ?

                                    <AlbumTitle/>

                                    :
                                        
                                        <div onDoubleClick={handleEditTitle}>
                                            <Typography 
                                                
                                                variant="overline"
                                                className={heading}
                                                onClick={handleAlbumDetails(album.id)}
                                                
                                            >
                                        
                                        <img src='groupsVinyl.png' style={{height:18, width:18}}></img>&nbsp;{album.title}


                                            </Typography>
                                        </div>
                                        
                                    :

                                    null
                                    }
                                        
                                        
                                        
                                    
                                    
                            </>
                            )
                        })}

                        <Box 
                            display="flex"
                            flexWrap="wrap"
                            alignContent="flex-start"
                            
                        
                        >
                                       
                        
                        {/*if no distinction for what group to show is made, show all ternary statement would start here*/}
                                {songs.map((song) => {
                                    return (
                                        <>
                                        {song.is_active == true ?
                                        <>
                                    
                                            {song.priority === '3' ? 
                                                
                                                <Box
                                                    paddingTop={2}
                                                    paddingRight={3.5}
                                                
                                                >
                                                    <Card
                                                        
                                                        raised={true}
                                                        className={card3}
                                        
                                                    > 
                                                            <section>

                                                                <CardContent 
                                                
                                                                    item xs={1} key={song} 
                                                                    
                                            
                                                                >  
                                                
                                                                    <Typography 
                                                                        variant="overline" 
                                                                        className={title3}
                                                                        onClick={() => handleClick(song.song_id)} 

                                                                    >
                                                                        
                                                                        {song.title}
                                                                        
                                                                    </Typography>
                                                    
                                                

                                                                </CardContent>
                                            
                                                            </section>
                                                                
                                                                <section className={player3}>
                                                            
                                                                    <AudioPlayer

                                                                        audioFiles={[{ src: song.preview_audio }]}

                                                                    />
                                                                </section>

                                                    </Card> 
                                                </Box>
                                            : 
                                    
                                            null
                                            

                                            }
                                    
                                    <br></br>
                                    <br></br>
                                
                                </>
                            :
                            null

                            }  
                            </> 
                            );

                        })}

                </Box>

            </Paper>
                   

        </>
            
    );

}

export default GroupThree;