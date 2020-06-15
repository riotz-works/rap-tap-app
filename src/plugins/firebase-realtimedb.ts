import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { config } from '~/mixins/config';

firebase.initializeApp(config.firebase);
firebase.auth().signInAnonymously();
const realtimeDatabase = firebase.database();

export default realtimeDatabase;
