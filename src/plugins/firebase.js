import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyC-4HurtyOneA94dBcyrYexsM_-G6GL4v8",
  authDomain: "sendmail-demo-33e62.firebaseapp.com",
  databaseURL: "https://sendmail-demo-33e62.firebaseio.com",
  projectId: "sendmail-demo-33e62",
  storageBucket: "sendmail-demo-33e62.appspot.com",
  messagingSenderId: "626413590380",
  appId: "1:626413590380:web:5e352f6060a5c304498549"
};

firebase.initializeApp(config)
export const functions = firebase.functions()
