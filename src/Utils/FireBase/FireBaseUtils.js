import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged  } from "firebase/auth";
import {getFirestore, doc , getDoc, setDoc, collection, writeBatch, query, getDocs} from 'firebase/firestore'

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

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(collectionRef.firestore);

    objectsToAdd.forEach(async (object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase() );
        await batch.set(docRef, object)

    })

    await batch.commit();
    console.log('added to db')
}

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, 'categories');
    const q = query(collectionRef);

    const querySnapshot = await getDocs(q)

    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const {title, items} = docSnapshot.data()
        acc[title.toLowerCase()] = items
        return acc;
    },{})
    
    return categoryMap
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password)return
    
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInUserWithEmailAndPassword = async (email, password) => {
    if(!email || !password)return
    
    return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => { await signOut(auth)}

export const onAuthStateChangeListner = (callback) => onAuthStateChanged(auth, callback)