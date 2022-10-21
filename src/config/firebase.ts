// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAqcm9GEs3JwUoBRzzlkSdAk6217yqwvCE',
	authDomain: 'react-firebase-7febf.firebaseapp.com',
	projectId: 'react-firebase-7febf',
	storageBucket: 'react-firebase-7febf.appspot.com',
	messagingSenderId: '807100508783',
	appId: '1:807100508783:web:0d08a0f9a4774588d0fb9a',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
