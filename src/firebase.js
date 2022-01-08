// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: 'AIzaSyB7i0Zxm42odsCFx_-K_Gwms6MKCpery_A',
  authDomain: 'febian-it-test.firebaseapp.com',
  databaseURL:
    'https://febian-it-test-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'febian-it-test',
  storageBucket: 'febian-it-test.appspot.com',
  messagingSenderId: '685730221041',
  appId: '1:685730221041:web:f7e40926205420e8db1250',
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { db };
