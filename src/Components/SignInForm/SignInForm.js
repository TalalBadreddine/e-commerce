import { useState, useContext } from "react";
import FormInput from "../FormInput/FormInput";
import { signInWithGooglePopUp, createUserDocFromAuth, signInUserWithEmailAndPassword } from "../../Utils/FireBase/FireBaseUtils";
import { UserContext } from '../../context/user.context' 

let defaultFormValues = {
    email: '',
    password: ''
}


const SignInForm = () => {
    const [formValue, setFormValue] = useState(defaultFormValues)
    const {email, password} = formValue
    const {setCurrentUser} = useContext(UserContext)

    const logInWithGoogle = async (action) => {
        action.preventDefault()
        const response = await signInWithGooglePopUp()
        createUserDocFromAuth(response.user)
    }

    const handleChange = (event) => {
        setFormValue({...formValue, [event.target.name]: event.target.value })
    }

    const handleSignIn = async (action) => {
        action.preventDefault()

        try{
            const user = await signInUserWithEmailAndPassword(email, password)
            console.log(user)
            setCurrentUser(user)
        }
        catch(err){

            switch(err.code){

                case 'auth/Invalid-email':
                    alert('Invalid Email')
                    break
                
                case 'auth/wrong-password':
                    alert('Wrong Password')
                    break

                default:
                    alert(err.code.split('/')[1].replaceAll('-', ' '))
                    break
            }
            
        }
 
    }

    return (
        <form className="grid justify-center  rounded-xl space-y-4 justify-center border border-black py-10" onSubmit={handleSignIn}>
            <h1 className="text-4xl font-bold"> Sign In </h1>
            <div className=" w-auto inline-block ">
                <FormInput label='Email' type='email' name="email" onChange={handleChange} required placeholder="john@gmail.com" value={email} ></FormInput>
                <FormInput label='Password' type='password' name="password" onChange={handleChange} required placeholder="********" value={password} ></FormInput>
            </div>

            <button type="submit" className="py-4 px-2 block rounded-2xl text-white font-normal hover:bg-green-600 bg-green-500 w-64"  >Sign In</button>


            <button onClick={logInWithGoogle} type='submit' className="py-4 px-2 w-64 block rounded-2xl text-white font-normal hover:bg-green-600 bg-green-500 ">
                Sign In With Google
            </button>

        </form>
    )
}

export default SignInForm