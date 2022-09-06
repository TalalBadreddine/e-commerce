import React, { useRef, useState } from "react";
import SignUp from '../../Components/SignUp/SignUp'
import SignInForm from '../../Components/SignInForm/SignInForm'
import styles from './Authentication.module.css'

const Authentication = () => {

    const cardFront = useRef()
    const cardBack = useRef()
    const signInBtnRef = useRef()
    const registerBtnRef = useRef()

    const signIn = (e) => {
        e.preventDefault()
        cardFront.current.style.transform = `rotateY(180deg)`
        cardBack.current.style.transform = `rotateY(0deg)`
    }

    const register = (e) => {
        e.preventDefault()
        cardFront.current.style.transform = `rotateY(0deg)`
        cardBack.current.style.transform = `rotateY(180deg)`
    }

    const fillSignIn = (e) =>{
        signIn(e)
        signInBtnRef.current.style.backgroundImage = 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)' 
        registerBtnRef.current.style.backgroundImage = 'none'
    }

    const fillRegister = (e) =>{
        register(e)
        registerBtnRef.current.style.backgroundImage = 'linear-gradient(43deg, #4158D0 0%,#C850C0 46%, #FFCC70 100%) '
        signInBtnRef.current.style.backgroundImage = 'none' 
    }

    const handleBtnClick = (e) =>{
        e.target.name == 'signIn' ? fillSignIn(e) : fillRegister(e)
    }

    return (
        
        <div className={styles.container}>

            <div className={styles.card}>


                <div className={styles.buttonsDiv}>
                    <button onClick={(e) => (handleBtnClick(e))} className={`${styles.signInBtn} ${styles.btn}`} ref={signInBtnRef} name='signIn' >Sign-In</button>
                    <button onClick={(e) => (handleBtnClick(e))} className={`${styles.registerBtn} ${styles.btn}`} ref={registerBtnRef} name='register' >Register</button>
                </div>

                <div className={`${styles.front} ${styles.cardSide}`} ref={cardFront} >
                    <SignUp />
                </div>

                <div className={`${styles.back} ${styles.cardSide}`} ref={cardBack} >
                    <SignInForm />
                </div>

            </div>
        </div>
    )
}

export default Authentication