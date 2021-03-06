import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import getAlbum from './setAlbumSelection.saga'
import getAlbums from './getAlbums.saga'
import getAlbumDetails from './getAlbumDetails.saga'
import getSong from './setSongSelection.saga';
import getRecording from './setAudioSelection.saga';
import getAllRecordings from './getRecordings.saga';
import getChordDiagrams from './getChordDiagrams.saga'
import getSongs from './getSongs.saga';
import postAlbum from './postAlbum.saga'
import albumRevise from './reviseAlbum.saga';
import postSong from './postSong.saga';
import postRecording from './postRecording.saga';
import postChordDiagram from './postChordDiagram.saga';
import getSongDetails from './getSongDetails.saga';
import songDelete from './deleteSong.saga';
import audioDelete from './deleteRecording.saga';
import songRevise from './reviseSong.saga';
import imageDelete from './deleteChordDiagram.saga';

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(), // login saga is now registered
    registrationSaga(),
    userSaga(),
    getSong(),
    getSongs(),
    getAlbum(),
    getAlbums(),
    albumRevise(),
    getAlbumDetails(),
    getRecording(),
    getChordDiagrams(),
    getAllRecordings(),
    getSongDetails(),
    postAlbum(),
    postSong(),
    postRecording(),
    postChordDiagram(),
    songDelete(),
    audioDelete(),
    imageDelete(),
    songRevise()
   

  ]);
}
