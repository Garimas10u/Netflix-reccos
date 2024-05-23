import React from 'react'
import { useState } from 'react';
import Header from './Header'

const Login = () => {
    const [isSignInForm, setIsSignInForm]=useState(true);


    const toggleSignInForm=()=>{
      setIsSignInForm(!isSignInForm);
    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/a99688ca-33c3-4099-9baa-07a2e2acb398/ca15fd28-b624-4852-8bfe-9cdd5c88475d/IN-en-20240520-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="bg" />
      </div>
      <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-xl'>
        
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In": "Sign Up" }</h1>

        {!isSignInForm && (<input 
        type="text" 
        placeholder="Full Name" 
        className='p-2 my-4 w-full bg-gray-700'/>)}

        <input type="text" placeholder='Email Address' className='p-2 my-4 w-full bg-gray-700' />

        <input type="password" placeholder='Password' className='p-2 my-4 w-full bg-gray-700' />

        <button className='p-4 my-6 bg-red-700 w-full rounded-lg'>{isSignInForm ? "Sign In": "Sign Up"}</button>
        <p className='p-4 cursor-pointer text-blue-400' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now": "Already Registered? Sign In Now"}</p>
      </form>
    </div>
  )
}

export default Login