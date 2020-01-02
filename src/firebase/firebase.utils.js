import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId,
    measurementId: process.env.measurementId,
};

// const firebaseConfig = {
//     apiKey: 'AIzaSyD1T92OpyoPt4yVn822iu7IhTc7FwsRfXU',
//     authDomain: 'techelp-shop.firebaseapp.com',
//     databaseURL: 'https://techelp-shop.firebaseio.com',
//     projectId: 'techelp-shop',
//     storageBucket: 'techelp-shop.appspot.com',
//     messagingSenderId: '379468449769',
//     appId: '1:379468449769:web:8959ea558fff95b6c02d78',
//     measurementId: 'G-TGMQDWZP23',
// };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
