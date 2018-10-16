import firebase from 'firebase/app';
import 'firebase/database';

const config = {
  databaseURL: 'https://spajam-2018-qualification.firebaseio.com'
};

firebase.initializeApp(config);
const realtimeDatabase = firebase.database();

export default realtimeDatabase;
