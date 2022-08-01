import React, {useState} from "react";
import {createAuthUserWithEmailAndPassword, createUserDocFromAuth} from '../../Utils/FireBase/FireBaseUtils'
import FormInput from '../FormInput/FormInput'

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
        <div className="w-auto rounded-3xl border border-black ml-2 grid justify-center py-4 space-y-6 " >

            <div className="text-4xl font-bold ">
                <h1>SignUp</h1>
            </div>

            <form onSubmit={ handleSubmit} className=" space-y-5 inline-block m-auto  ">

                <FormInput label = 'DisplayName' type='name' name="displayName" onChange={handleChange} placeholder="Display Name" value={displayName}  />

                <FormInput label = 'Email' type='email' name="email" onChange={handleChange} value={email} placeholder="email"/>

                <FormInput label = 'Password' type='password' name="password" onChange={handleChange} value={password} placeholder="*******" />

                <FormInput label = 'Re-Password' type='password' name="confirmPassword" onChange={handleChange} placeholder="*******"  value={confirmPassword} />

            <div className=" w-32 h-12 m-auto">
                <button className="text-center w-full bg-green-500 px-6 py-2 h-full rounded-3xl text-white font-bold hover:bg-green-600">Submit</button>
            </div>

            </form>


        </div>
    )
}

export default SignUp