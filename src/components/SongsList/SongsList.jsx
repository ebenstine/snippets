import React, { useEffect, useMemo, useState } from 'react';
import AudioPlayer from "react-modular-audio-player";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom'
import { Box, Paper, Typography, Card, CardContent, Button } from '@material-ui/core';
import useStyles from './SongsListStyles';
import ColorCodeLegend from './ColorCodeLegend'
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
            heading,
            playIcon,
           
            
        } = useStyles();

    const dispatch = useDispatch();
    const history = useHistory();
    const songs = useSelector((store) => store.songs);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
       
        dispatch({
            type: 'FETCH_SONGS', 
        
        });
        
    },[]);
    
    let PageSize = 10

    //snip out any inactive songs from the array to uphold display integrity
    const removeInactive = () => {
        for (let i = songs.length - 1; i >= 0; --i) {
            if (songs[i].is_active == false) {
                songs.splice(i, 1);
            }
        }
    }
     

    const songsList = useMemo(() => {

        removeInactive();
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return songs.slice(firstPageIndex, lastPageIndex);
        
      }, [currentPage]);

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
                                                                        hideName="true"
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
                                                                        hideName="true"
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
                                                                        hideName="true"
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
                                                                        hideName="true"
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