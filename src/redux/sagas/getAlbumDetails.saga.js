import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAlbumDetails(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        const response = yield axios.get(`/api/album/${action.payload}`, config);
    
        yield put({ type: 'SET_ALBUM_DETAILS', payload: response.data})

    } catch (error) {
        console.log('Song GET request failed', error)
    }
}


function* getAlbumsSaga() {
    yield takeLatest('FETCH_ALBUM_DETAILS', getAlbumDetails);
}

export default getAlbumsSaga;