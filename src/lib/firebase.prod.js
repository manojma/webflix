import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//we need to somehow seed the database

//we need a config here, put your api details here 
const config = {
    apiKey: "AIzaSyAb6vsn1O_N-5LWeJjjDTdeQmWIq3BUhIY",
  authDomain: "webflix-eef8f.firebaseapp.com",
  projectId: "webflix-eef8f",
  storageBucket: "webflix-eef8f.appspot.com",
  messagingSenderId: "225795402185",
  appId: "1:225795402185:web:dffbdde002b584bf28a018",
  measurementId: "G-7XBEGNX9GD"
};

const firebase = Firebase.initializeApp(config);

//dont uncomment this bcz it will dupliacte the database on firebase
//seedDatabase(firebase);

export { firebase };