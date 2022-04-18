import React, { useEffect, useMemo, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from './SongsListStyles';
import ColorCodeLegend from './ColorCodeLegend'
import Feedback from '@material-ui/icons/Feedback';
import Pagination from '../Pagination/Pagination';

//import songDetails from '../../redux/reducers/songDetails.reducer';




function SongsList() {

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
           
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const songs = useSelector((store) => store.songs);
    const songDetails = useSelector((store) => store.songDetails)
    const [currentPage, setCurrentPage] = useState(1);
    
    console.log(songs);

    //allows for the homepage to render aesthetically right even if there
    //is one inactive song in the array.  should solve this but it's fine like this.
    //most users would focus on what they're doing currently and not even use the inactive archive feature.
    
    let PageSize = 10

    //if there's any instance of an inactive song, change the page size to 11
    //this will keep the view of active songs at 10
    
    if (songs.filter(e => e.is_active === false).length > 0){
         PageSize = 11
    }
     

    const songsList = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return songs.slice(firstPageIndex, lastPageIndex);
      }, [currentPage]);
    
    
   
    useEffect(() => {
       
        dispatch({
            type: 'FETCH_SONGS', 
        
        });
        
    },[]);
    //push forward to details page on click


    const handleClick = (songId) => {
        history.push(`/songDetails/${songId}`)
    }

    //conditionally render cards with color differentiation according to priority
    //as long as songs exist, and are designated active
    
    return (
        
        <> 
                                    
            <Paper className={paper} elevation={10}>
                
                <div className={menuDots}>

                    <ColorCodeLegend/>

                </div>

                <div>
                    <Typography 
                        
                        variant="overline"
                        className={heading}
                        
                    >

                    <span className={playIcon}>▶</span>All Active Songs


                    </Typography>
                </div>
                <Box 
                    display="flex"
                    flexWrap="wrap"
                    justifyContent="space-between"
                >
                {/*if no distinction for what group to show is made, show all ternary statement would start here*/}
                        {songsList.map((song) => {
                            return (
                                <>
                                    {song.is_active == true ?
                                        <>
                            
                                            {song.priority === '1' ? 
                                        
                                                <Box
                                                    
                                                    paddingTop={2}
                                                
                                                >
                                                    <Card
                                                        
                                                        raised={true}
                                                        className={card1}
                                        
                                                    > 
                                                            <section>

                                                                <CardContent 
                                                
                                                                    item xs={1} key={song} 
                                                                    
                                            
                                                                >  
                                                
                                                                    <Typography 
                                                                        variant="overline" 
                                                                        className={title1}
                                                                        onClick={() => handleClick(song.song_id)} 

                                                                    >
                                                                        
                                                                        {song.title}
                                                                        
                                                                    </Typography>
                                                    
                                                

                                                                </CardContent>
                                            
                                                            </section>
                                                                
                                                                <section className={player1}>
                                                            
                                                                    <AudioPlayer

                                                                        audioFiles={[{ src: song.preview_audio }]}
                                                                        hideForward="true"
                                                                        hideLoop="true"
                                                                        hideRewind="true"
                                                                        playIcon="playIcon.png"
                                                                        playHoverIcon="playIcon.png"
                                                                        pauseIcon="pauseIcon.png"
                                                                        pauseHoverIcon="pauseIcon.png"
                                                                        volumeIcon="volume.png"
                                                                        volumeEngagedIcon="volume.png"
                                                                        muteIcon="volume.png"
                                                                        muteEngagedIcon="volume.png"
                                                                        
                                                                    />
                                                                </section>

                                                    </Card> 
                                                </Box>
                                            : 
                            
                                                song.priority === '2' ?
                                        
                                                    <Box
                                                        
                                                        paddingTop={2}
                                        
                                                    >
                                                        <Card
                                            
                                                            raised={true}
                                                            className={card2}
                                                        
                                                        > 
                                                            <section> 
                                                    
                                                                <CardContent 
                    
                                                                    item xs={1} key={song} 
                                                                        
                
                                                                >  
                    
                                                                    <div>
                                                        
                                                                        <Typography 
                                                                                
                                                                            variant="overline" 
                                                                            className={title2}
                                                                            onClick={() => handleClick(song.song_id)}
                                                                        >
                                                                            {song.title}

                                                                        
                                                                        </Typography>
                        
                                                                    </div>

                                                                </CardContent>
                
                                                            </section>
                                            
                                                                <section className={player2}>
                                                
                                                                    <AudioPlayer

                                                                        audioFiles={[{ src: song.preview_audio }]}
                                                                        hideForward="true"
                                                                        hideLoop="true"
                                                                        hideRewind="true"
                                                                        playIcon="playIcon.png"
                                                                        playHoverIcon="playIcon.png"
                                                                        pauseIcon="pauseIcon.png"
                                                                        pauseHoverIcon="pauseIcon.png"
                                                                        volumeIcon="volume.png"
                                                                        volumeEngagedIcon="volume.png"
                                                                        muteIcon="volume.png"
                                                                        muteEngagedIcon="volume.png"
                                                                    />
                                                                
                                                                </section>

                                                        </Card>
                                        
                                                    </Box>
                                        
                                            : 

                                                song.priority === '3' ?
                                                
                                                    <Box
                                                        
                                                        paddingTop={2}
                                
                                                    >
                                                    
                                                        <Card
                                    
                                                            raised={true}
                                                            className={card3}
                                                
                                                        > 
                                                            
                                                            <section> 
                                            
                                                                <CardContent 

                                                                    item xs={1} key={song} 
                                                                        

                                                                >  

                                                                    <div>
                                                
                                                                        <Typography 
                                                                        
                                                                            variant="overline" 
                                                                            className={title3}
                                                                            onClick={() => handleClick(song.song_id)}
                                                                        >
                                                                            {song.title}
                                                                
                                                                        </Typography>
                
                                                                    </div>

                                                                </CardContent>

                                                            </section>
                                    
                                                                <section className={player3}>
                                        
                                                                    <AudioPlayer

                                                                        audioFiles={[{ src: song.preview_audio }]}
                                                                        hideForward="true"
                                                                        hideLoop="true"
                                                                        hideRewind="true"
                                                                        playIcon="playIcon.png"
                                                                        playHoverIcon="playIcon.png"
                                                                        pauseIcon="pauseIcon.png"
                                                                        pauseHoverIcon="pauseIcon.png"
                                                                        volumeIcon="volume.png"
                                                                        volumeEngagedIcon="volume.png"
                                                                        muteIcon="volume.png"
                                                                        muteEngagedIcon="volume.png"

                                                                    />
                                                        
                                                            </section>

                                                        </Card>
                                
                                                    </Box>
                                            : 
                                                /*this little update allows for the possibility that a user transfers an inactive song with 
                                                no priority input into the active category */
                                                song.priority === 'Uncertain' || song.priority === null ?
                                        
                                                    <Box
                                                
                                                        paddingTop={2}
                                                    
                                                    >
                                            
                                                        <Card
                                    
                                                            raised={true}
                                                            className={card}
                                                        
                                                        > 
                                                            
                                                            <section> 
                                                        
                                                                <CardContent 
            
                                                                    item xs={1} key={song} 
                                                                        

                                                                >  
            
                                                                    <div>
                                                            
                                                                        <Typography 
                                                                    
                                                                            variant="overline" 
                                                                            className={title}
                                                                            onClick={() => handleClick(song.song_id)}
                                                                        >
                                                                            {song.title}
                                                                    
                                                                        </Typography>
                
                                                                    </div>

                                                                </CardContent>

                                                            </section>
                                    
                                                                <section className={player}>
                                        
                                                                    <AudioPlayer

                                                                        audioFiles={[{ src: song.preview_audio }]}
                                                                        hideForward="true"
                                                                        hideLoop="true"
                                                                        hideRewind="true"
                                                                        playIcon="playIcon.png"
                                                                        playHoverIcon="playIcon.png"
                                                                        pauseIcon="pauseIcon.png"
                                                                        pauseHoverIcon="pauseIcon.png"
                                                                        volumeIcon="volume.png"
                                                                        volumeEngagedIcon="volume.png"
                                                                        muteIcon="volume.png"
                                                                        muteEngagedIcon="volume.png"

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
           
               
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={songs.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}

            />


        </>
        
        
        
    );

}

export default SongsList;