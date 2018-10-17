import firebase from 'firebase/app';
import 'firebase/database';   // tslint:disable-line:no-import-side-effect  // Because of Firebase recommended import method

const config = {
  databaseURL: process.env.FIREBASE_URL
};

firebase.initializeApp(config);
const realtimeDatabase = firebase.database();

export default realtimeDatabase;
