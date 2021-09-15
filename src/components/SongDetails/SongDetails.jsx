import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { connect } from 'react-redux';
import { Card, CardContent, CardActions, Button } from '@material-ui/core';

import SongTitle from './SongDetailsComponents/SongTitle';
import SongLyrics from './SongDetailsComponents/SongLyrics';
import SongPerformanceNotes from './SongDetailsComponents/SongPerformanceNotes';
import SongInstrumentNotes from './SongDetailsComponents/SongInstrumentNotes'




const useStyles = makeStyles((theme) => ({
    card: {
        width: 700,
        marginBottom: '1em',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: '4em',
        marginBottom: '3em',
    },
    emptyCard: {
        marginTop: '20em',
        marginBottom: '35em'
    },
    noCard: {
        marginBottom: '20em'
    }
}));


const SongDetails = ({ song, history, dispatch, recordings }) => {
    const { card, root, emptyCard, noCard } = useStyles();
    const [updated, setUpdated] = useState(false);

    const directUserHome = () => {
        dispatch({type: 'CLEAR_SELECTED_SONG'})
        history.push('/user');
    }


    const handleBack = () => {
        console.log('back to movies')
        history.goBack();
    }

    useEffect(() => {
        if (song.id === oldSongId) {
            setUpdated(true)

        } else if (song.id !== oldSongId) {
            setOldSongId(song.id);
            setUpdated(false);
            dispatch({ type: 'FETCH_RECORDINGS', payload: song.id })
        }
        return () => {
            setUpdated(false)
        };
    }, [song.id, oldSongId, dispatch, updated, recordings]);
    //button to go back, map through details with id
    return (
        <>
            <Button onClick={handleBack}>Back to List</Button>

              

            {  (updated) ?
                <div className={root} onDoubleClick={directUserHome}>
                    <div onDoubleClick={e => e.stopPropagation()}>
                        <Card style={{ backgroundColor: song.color }} raised={true}>
                            <WorkingCardMenu /*directUserHome={directUserHome} directOriginalSong={directOriginalSong}*/ />
                            <section >
                                <CardContent className={card}>
                                    <SongTitle />
                                    <SongLyrics />
                                    <SongInstrumentNotes />
                                    <SongPerformanceNotes />
                                </CardContent>
                            </section>
                            <AudioPlayer />
                            <CardActions>
                            </CardActions>
                        </Card>
                    </div>
                </div>

            :<div className={emptyCard} > </div>}
            {song.id === 1.1 && <div className={noCard} > </div>}
            
        </>
    );

}

const mapStoreToProps = (reduxState) => {
    return {
        song: reduxState.song,
        recordings: reduxState.recordings,
    };
};
export default connect(mapStoreToProps)(SongDetails);