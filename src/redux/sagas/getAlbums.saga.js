import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* getAlbums() {
    try {
        

        const response = yield axios.get('/api/album');
    
        yield put({ type: 'SET_ALBUMS', payload: response.data})

    } catch (error) {
        console.log('Song GET request failed', error)
    }
}


function* getAlbumsSaga() {
    yield takeLatest('FETCH_ALBUMS', getAlbums);
  
}

export default getAlbumsSaga;