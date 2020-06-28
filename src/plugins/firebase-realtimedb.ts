import '@firebase/auth';
import '@firebase/database';
import firebase from '@firebase/app';
import { config } from '~/mixins/config';

firebase.initializeApp(config.firebase);
if (!firebase.auth || !firebase.database) {
  throw Error('firebase auth and database are not supported');
}
firebase.auth().signInAnonymously();
const realtimeDatabase = firebase.database();

export default realtimeDatabase;
