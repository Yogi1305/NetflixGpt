import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from "../util/firebase";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
   const navigate = useNavigate();
   const user=useSelector((store)=>store.user);

  const handlesignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className='absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10  flex justify-between'>
       <img className="w-48" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt='logo'/>
       {
         user &&(<div className='flex'>
         <img src="https://img.icons8.com/?size=256&id=7819&format=png" className='w-10 h-10'></img>
         <button onClick={handlesignout} className='bg-red-500 rounded-lg h-10 max-w-max p-2'>Sign Out</button>
        </div>)
       }
    </div>
  )
}

export default Header;
