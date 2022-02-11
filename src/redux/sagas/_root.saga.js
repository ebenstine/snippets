import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';
import userSaga from './user.saga';
import getSong from './setSongSelection.saga';
import getRecording from './setAudioSelection.saga';
import getAllRecordings from './getRecordings.saga';
import getChordDiagrams from './getChordDiagrams.saga'
import getSongs from './getSongs.saga';
import postSong from './postSong.saga';
import postRecording from './postRecording.saga';
import postChordDiagram from './postChordDiagram.saga';
import getSongDetails from './getSongDetails.saga';
import songDelete from './deleteSong.saga';
import audioDelete from './deleteRecording.saga';
import reviseSong from './reviseSong.saga';
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
    getRecording(),
    getChordDiagrams(),
    getAllRecordings(),
    getSongDetails(),
    postSong(),
    postRecording(),
    songDelete(),
    audioDelete(),
    reviseSong()

  ]);
}
