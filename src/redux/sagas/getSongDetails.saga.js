import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSongDetails(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get(`/api/song/${action.payload}`, config);
    
        yield put({ type: 'SET_SONG_DETAILS', payload: response.data})

    } catch (error) {
        console.log('Song GET request failed', error)
    }
}


function* getSongsSaga() {
    yield takeLatest('FETCH_SONG_DETAILS', getSongDetails);
}

export default getSongsSaga;