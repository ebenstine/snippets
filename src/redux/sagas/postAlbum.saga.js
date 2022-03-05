import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postAlbum(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };

        yield axios.post('/api/album', action.payload, config);
        yield put({ type: 'FETCH_ALBUMS' });
        
    } catch (error) {
        console.log('Song POST request failed', error)
    }
}
function* addAlbum() {
    yield takeLatest('POST_NEW_ALBUM', postAlbum);
}

export default addAlbum;