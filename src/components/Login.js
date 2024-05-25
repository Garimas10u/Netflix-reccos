import React from 'react'
import { useState, useRef } from 'react';

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { checkValidateData } from '../utils/validate';
import Header from './Header'



const Login = () => {
    const [isSignInForm, setIsSignInForm]=useState(true);
    const [ErrorMessage, setErrorMessage]=useState(true);
    

    const name=useRef(null);
    const email=useRef(null);
    const password =useRef(null);

    const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
    }

    const handleButtonClick=() =>{
      //Validate the form data
      //check valid data
      const message=checkValidateData(email.current.value, password.current.value);

     setErrorMessage(message);
     if (message) return;

     if(!isSignInForm){
        //signup
         createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value
          })
          
          
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorCode+"-"+errorMessage)
          });

     }else{
      //signin
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        
        const user = userCredential.user;
       
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode+"-"+errorMessage)
      });


     }

    }



  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg" />
      </div>
      <form 
      onSubmit={(e)=> e.preventDefault()}
      className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-xl'>
        
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up" }</h1>

        {!isSignInForm && (<input 
        type="text" 
        ref={name}
        placeholder="Full Name" 
        className='p-2 my-4 w-full bg-gray-700'/>)}

        <input type="text"
        ref={email} placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />

        <input type="password" 
        ref={password}placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />

        <p className='text-red-500'>{ErrorMessage}</p>

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg' onClick={handleButtonClick}>{isSignInForm ? "Sign In": "Sign Up"}</button>
        <p className='p-4 cursor-pointer text-blue-400' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now": "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login