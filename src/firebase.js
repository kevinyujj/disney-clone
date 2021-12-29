import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider, signInWithPopup } from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyC88_oDPlA72qvZZV1fZZqsDKcEvfH4fvU",
  authDomain: "disney-clone-8c638.firebaseapp.com",
  projectId: "disney-clone-8c638",
  storageBucket: "disney-clone-8c638.appspot.com",
  messagingSenderId: "858229228936",
  appId: "1:858229228936:web:83b93542a2e85ad079e63d",
  measurementId: "G-RTKCG48X16"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const user = auth.currentUser;

export const provider = new GoogleAuthProvider()

export const signInWithGoogle = () => {


  signInWithPopup(auth, provider)
  .then((res) => {
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })
};