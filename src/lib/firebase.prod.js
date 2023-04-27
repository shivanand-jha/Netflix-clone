import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyA-H9mINnkebzI0vRO6rlZHJDQclLDb3Ec",
  authDomain: "netflix-clone-995ba.firebaseapp.com",
  projectId: "netflix-clone-995ba",
  storageBucket: "netflix-clone-995ba.appspot.com",
  messagingSenderId: "739800634672",
  appId: "1:739800634672:web:5e84f135a37848426b24f5",
  measurementId: "G-Q3WJC96M1D"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
