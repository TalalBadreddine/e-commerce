import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, signInWithRedirect, createUserWithEmailAndPassword  } from "firebase/auth";
import {getFirestore, doc , getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "e-commerce-e05e4.firebaseapp.com",
  projectId: "e-commerce-e05e4",
  storageBucket: "e-commerce-e05e4.appspot.com",
  messagingSenderId: "413487506580",
  appId: "1:413487506580:web:3e235561b32173f0a34081",
  measurementId: "G-Z9FLFCDPVX"
};

const firebaseApp = initializeApp(firebaseConfig)
const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt:'select_account'
})

export const auth = getAuth(firebaseApp);
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)
export const db = getFirestore()

export const createUserDocFromAuth =  async (userInfo, additionalInfo = {}) => {
    if(!userInfo)return 

    const userDocument = doc(db, 'users', userInfo.uid)
    const snapShot = await getDoc(userDocument)
    const userExist = await snapShot.exists()
    
    if(!userExist){
        try{

            const {email, displayName} = userInfo

            await setDoc(userDocument, {
                displayName: displayName,
                email: email,
                registerAt: new Date(),
                ...additionalInfo
            })

        }
        catch(err){
            console.log('error creating user ', err)
        }


    }

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password)return
    
    return await createUserWithEmailAndPassword(auth, email, password)
}