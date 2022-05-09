import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAllRecordings() {
    try {
        //const config = {
           // headers: { 'Content-Type': 'application/json' },
          //  withCredentials: true,
        //};

        const response = yield axios.get('/api/recording');
    
        yield put({ type: 'SET_ALL_RECORDINGS', payload: response.data})

    } catch (error) {
        console.log('Song GET request failed', error)
    }
}


function* getRecordingsSaga() {
    yield takeLatest('FETCH_RECORDINGS', getAllRecordings);
    // yield takeLatest('FETCH_SONG', getSong);
}

export default getRecordingsSaga;
