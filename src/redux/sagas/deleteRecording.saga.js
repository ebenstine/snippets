
import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* audioDelete(action) {
    try {
        
        const id = (action.payload);
        console.log(id);
        yield axios.delete(`/api/recording/${id}`);
        yield put({ 
            type: 'FETCH RECORDINGS',
            
           
        });
        //the id is being returned and it doesn't exist.  the delete is working,
        //but the fetch details attempts to grab the same id on return.
        //result is temporary appearance of no recordings
        
    } catch (error) {
        console.log('Song DELETE request failed', error)
    }
}

function* deleteAudio() {
    yield takeLatest('DELETE_AUDIO', audioDelete);
}

export default deleteAudio;
