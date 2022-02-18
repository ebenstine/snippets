import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* imageDelete(action) {
    try {
        
        const id = (action.payload);
        console.log(id);
        yield axios.delete(`/api/chord_diagram/${id}`);
        yield put({ 
            type: 'FETCH_DIAGRAMS',
            
           
        });
        //the id is being returned and it doesn't exist.  the delete is working,
        //but the fetch details attempts to grab the same id on return.
        //result is temporary appearance of no recordings
        
    } catch (error) {
        console.log('Song DELETE request failed', error)
    }
}

function* deleteChordDiagram() {
    yield takeLatest('DELETE_DIAGRAM', imageDelete);
}

export default deleteChordDiagram;
