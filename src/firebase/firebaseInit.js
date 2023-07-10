import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyC5ahpNwdPa8qtOXxvgKnmfKNQSLazFfTw",
    authDomain: "invoice-app-4f99b.firebaseapp.com",
    projectId: "invoice-app-4f99b",
    storageBucket: "invoice-app-4f99b.appspot.com",
    messagingSenderId: "395459190700",
    appId: "1:395459190700:web:7ef182e806ae4bf962a409"
  };

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export { firestore }