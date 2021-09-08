import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getSongs() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get('/api/song', config);
    
        yield put({ type: 'SET_SONGS', payload: response.data})

    } catch (error) {
        console.log('Song GET request failed', error)
    }
}


function* getSongsSaga() {
    yield takeLatest('FETCH_SONGS', getSongs);
   
}

export default getSongsSaga;