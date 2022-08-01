import React, {useState} from "react";
import SignUp from '../../Components/SignUp/SignUp'
import SignInForm from '../../Components/SignInForm/SignInForm'

const Authentication = () => {


    return (
            <div className="flex w-full px-10 py-10" >
                <div className="w-1/3 ">
                    <SignInForm />
                </div>

                <div className=" w-1/3">
                    <SignUp />
                </div>

            </div>
    )
}

export default Authentication