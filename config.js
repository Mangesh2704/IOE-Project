const { initializeApp } = require('firebase/app');
const { getFirestore, collection, addDoc } = require('firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAa8t5r4Cxsu7ChUt6V_EvHbWq26Mv9mis",
    authDomain: "ioepr-b684b.firebaseapp.com",
    databaseURL: "https://ioepr-b684b-default-rtdb.firebaseio.com",
    projectId: "ioepr-b684b",
    storageBucket: "ioepr-b684b.appspot.com",
    messagingSenderId: "410138338083",
    appId: "1:410138338083:web:2675b2462dc12720efa296",
    measurementId: "G-BMBVR7W49D"
  };
  
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const admin = require('firebase-admin');
const serviceAccount = require('./ioepr-b684b-firebase-adminsdk-zk2eo-076846654c.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ioepr-b684b-default-rtdb.firebaseio.com' 
});

const db = admin.database();
// Example usage: Adding data to Firestore
async function addUser() {
  try {
    const docRef = await addDoc(collection(db, 'users'), {
      name: 'John Doe',
      email: 'john@example.com'
    });
    console.log('Document successfully written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
}


  
  
  module.exports = {addUser,addDoc,collection,db};