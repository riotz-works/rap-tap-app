import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_REALTIME_DATABASE_URL
};

firebase.initializeApp(config);
firebase.auth().signInAnonymously();
const realtimeDatabase = firebase.database();

export default realtimeDatabase;
