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
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src={LOGO} alt="logo" />

       {user && (<div>
        <div className='flex  items-center p-2'>
          {showGptSearch && <select className='p-4 mx-6 bg-gray-900 text-white ' onClick={handleLangChange}> 
            <option value="en">English</option>
            <option value="hindi">Hindi</option>
            <option value="spanish">Spanish</option>
          </select>}
        <button className='p-4 mr-6 rounded-lg bg-red-700 text-white' onClick={handleGptSearchClick}>
          {showGptSearch? "Home" : "GPT Search"}
          </button>
       <FaUser size={40} color='white' className=''/>
       <button onClick={handleSignout}className='font-bold text-white align-center'>Sign Out</button>
        </div>
      
       </div>
       )}
        
    </div>

  )
}

export default Header