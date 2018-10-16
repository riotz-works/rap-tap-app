import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  databaseURL: process.env.FIREBASE_URL
};

firebase.initializeApp(config);
const realtimeDatabase = firebase.database();

export default realtimeDatabase;
