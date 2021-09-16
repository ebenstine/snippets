import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* reviseSong(action) {
    try {
        /*const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,*/
       // };
        console.log('**action.payload is:', action.payload);
        yield axios.put(`/api/song/${action.payload.id}`, action.payload);

        yield put({
            type: 'FETCH_SONG_DETAILS'
        })
    } catch (error) {
        console.log('Song PUT request failed', error)
    }
}

function* songRevise() {
    yield takeLatest('REVISE_SONG', reviseSong);
}

export default songRevise;

