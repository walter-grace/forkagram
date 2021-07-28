import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyCAUal0clMdvre9-Z137OQXLcWUhmdZRGQ",
    authDomain: "forkgram-d3d3f.firebaseapp.com",
    projectId: "forkgram-d3d3f",
    storageBucket: "forkgram-d3d3f.appspot.com",
    messagingSenderId: "734202981600",
    appId: "1:734202981600:web:75e42be95f63c7962cf485"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };