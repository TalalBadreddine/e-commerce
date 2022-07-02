import React from "react";
import { signInWithGooglePopUp, createUserDocFromAuth } from "../../Utils/FireBase/FireBaseUtils";

const SignIn = () => {

    const logInWithGoogle = async () => {
        const response = await signInWithGooglePopUp()
        createUserDocFromAuth(response.user)
    }

    return(
        <>
            <h1>I am Sign In page</h1>
             <button onClick={logInWithGoogle}>
               Sign In
            </button>
        </>
    )
}

export default SignIn