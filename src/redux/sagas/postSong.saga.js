import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postSong(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        yield axios.post('/api/song', action.payload, config);
        yield put({ type: 'FETCH_SONGS' });
        
    } catch (error) {
        console.log('Song POST request failed', error)
    }
}
function* addSong() {
    yield takeLatest('POST_NEW_SONG', postSong);
}

export default addSong;
