import React, {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocFromAuth} from '../../Utils/FireBase/FireBaseUtils'

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUp = () => {
    const [formInformation, setFormInformation] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formInformation

    const handleSubmit = async (action) => {
        action.preventDefault()
        
        if(password != confirmPassword){
            alert("Passwords don't match with confirmation")
            return
        }
        try{

            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            
            await createUserDocFromAuth(user, {displayName})

        }
        catch(err){
            if(err.code == 'auth/email-already-in-use'){
                alert("Email already in use")
                return 
            }
            console.log(err)
        }

    }
    
    const handleChange = (event) =>{
        const {name, value} = event.target
        setFormInformation({...formInformation, [name]: value})
    }

    return(
        <div>

            <h1>SignUp Page</h1>

            <form onSubmit={ handleSubmit}>

                <label>Display Name</label>
                <input type='name' name="displayName" onChange={handleChange} value={displayName}/>

                <label>email</label>
                <input type='email' name="email" onChange={handleChange} value={email} />

                <label>password</label>
                <input type='password' name="password" onChange={handleChange} value={password} />

                <label>confirmPassword</label>
                <input type='password' name="confirmPassword" onChange={handleChange}  value={confirmPassword}/>

                <button>Submit</button>

            </form>
        </div>
    )
}

export default SignUp