import React, {useEffect} from 'react'
import { FaUser } from "react-icons/fa";
import {LOGO} from "../utils/constants";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { signOut } from 'firebase/auth';
import { useSelector } from 'react-redux';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';



const Header = () => {
  const dispatch = useDispatch();
  const navigate =useNavigate();
  const user=useSelector((store)=> store.user);

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



  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
        <img className='w-44' src= {LOGO} alt="logo" />

       {user && (<div>
       <FaUser size={60} color='darkred' className=' pt-6 '/>
       <button onClick={handleSignout}className='font-bold'>Sign Out</button>
       </div>
       )}
        
    </div>

  )
}

export default Header