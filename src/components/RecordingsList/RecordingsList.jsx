//this will get pulled into songDetails, in a similar fashion to addRecording
//likely should be an mui drawer that pops out from the left

import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Paper, Typography, MenuItem, FormControl, InputLabel, Select, Card, Drawer, CardContent, Box, ListItemText, TextField } from '@material-ui/core';
import AudioPlayer from "react-modular-audio-player";
import useStyles from './RecordingsListStyles';
;








const RecordingsList = () => {
    const { paper, description, player, card } = useStyles();
    const dispatch = useDispatch();
    const history = useHistory();
    const recordings = useSelector((store) => store.recordings);

    let [isDrawerOpen, setIsDrawerOpen] = useState(false);

    

    useEffect(() => {
        dispatch({
            type: 'FETCH_RECORDINGS'
        });
    }, []);

    const handleClickOpen = () => {
        if (recordings === null) {
            setIsDrawerOpen(false)
        } else 
        setIsDrawerOpen(true);
    };

    const handleCancel = () => {
        setIsDrawerOpen(false);
    }

    return (
        <>
            <MenuItem onClick={handleClickOpen}>See Recordings History</MenuItem>
            <Drawer
                variant="temporary"
                anchor="left"
                open={isDrawerOpen}
                onClose={handleCancel}
            >
            <Paper className= {paper} elevation={10}>
                {recordings.map((recording) => {
                    return (
                        <>
                            <div>
                                <Card
                                    raised={true}
                                    className={card}
                                
                                >
                                <section>
                                    <CardContent

                                    item xs={1} key={recording}
                                    
                                    >
                                        <div>
                                            <Typography variant="h5" className={description}>{recording.description}</Typography>
                                        </div>

                                    </CardContent>
                                </section>
                                <section className={player}>
                                    <AudioPlayer

                                        audioFiles={[{ src: recording.src}]}

                                    />
                                </section>

                                </Card>
                            </div>
                        </>
                    )
                })}
            </Paper>
            </Drawer>


        </>

    )
}
            

export default RecordingsList;































