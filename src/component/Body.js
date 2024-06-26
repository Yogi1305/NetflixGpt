import React, { useEffect } from 'react';
import Login from "./Login";
import Browse from './Browse';
import { createBrowserRouter ,RouterProvider} from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {auth} from"../util/firebase";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../util/userSlice';

const Body = () => {
    const dispatch=useDispatch();
    const appRouter=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/Browse',
            element:<Browse/>
        }
    ]);
  
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid,email,displayname} = user;
              dispatch(addUser({uid:uid,email:email,displayname:displayname}));
          
            } else {
              // User is signed out
             dispatch(removeUser());
           
            }
          });
    },[]);
  return (
    <div>
        {/* <Login/>
        <Browse/> */}
        <RouterProvider router ={appRouter}/>
    </div>
  )
}

export default Body