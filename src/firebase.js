import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp({
	apiKey: 'AIzaSyCZg0stbZK5WBXH6_rTtnzu3XQbdPi-nu0',
	authDomain: 'todolist-7346d.firebaseapp.com',
	databaseURL: 'https://todolist-7346d-default-rtdb.firebaseio.com',
	projectId: 'todolist-7346d',
	storageBucket: 'todolist-7346d.appspot.com',
	messagingSenderId: '168078415128',
	appId: '1:168078415128:web:5f49a289ee110f1de33a6d',
	measurementId: 'G-61DQNCBW97',
});

export { firebaseConfig as firebase };
