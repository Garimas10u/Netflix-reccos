import React, {useEffect} from 'react'
import { FaUser } from "react-icons/fa";
import {LOGO} from "../utils/constants";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { toggleGptSearchView } from '../utils/gptSlice';
import { addUser, removeUser } from '../utils/userSlice';
import { changeLanguage } from '../utils/configSlice'; 



const Header = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const user=useSelector((store)=> store.user);
  const showGptSearch =useSelector((store => store.gpt.showGptSearch))

  const handleSignout=() =>{
    signOut(auth).then(()=>{
      navigate("/")
    }).catch((error) =>{
      navigate("/errorpage")
    });
  }

  useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;

        dispatch(
          addUser({
            uid:uid, 
            email:email, 
            displayName:displayName 
          })
        );
        navigate("/browse")
    
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleGptSearchClick =() =>{
    //toggle GPT Search button
    dispatch(toggleGptSearchView());

  }
  const handleLangChange=(e) =>{
   dispatch(changeLanguage(e.target.value));
  }

  return (
    <div className='absolute w-screen px-12 py-2 mb-6 bg-gradient-to-b from-black z-10 flex md:flex-row flex-col justify-between'>
        <img className='w-44 mx-auto md:mx-0' src={LOGO} alt="logo" />

       {user && (<div>
        <div className='flex items-center justify-center text-sm md:text-lg p-2'>
          {showGptSearch && <select className='p-2 px-4 mr-6 md:p-4 md:mx-6 bg-gray-900 text-white ' onClick={handleLangChange}> 
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
          </select>}
        <button className=' p-2 mr-4 md:p-3 md:mr-6 rounded-lg bg-red-700  text-white' onClick={handleGptSearchClick}>
          {showGptSearch? "Home" : "GPT Search"}
          </button>
          <div><FaUser size={35} color='white'  className=' hidden md:block'/></div>
       <div><FaUser size={20} color='white'  className='md:hidden'/></div>
       <button onClick={handleSignout}className=' text-white align-center hidden md:inline-block '>Sign Out</button>
        </div>
      
       </div>
       )}
        
    </div>

  )
}

export default Header