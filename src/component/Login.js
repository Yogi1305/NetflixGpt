import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkvalidate } from "../util/validate";
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../util/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate=useNavigate();
  const [isSignINForm, setIsSIgnInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSIgnInForm(!isSignINForm);
  };
  const[Errormessage,setErrormessage]=useState(null);
//   us can also use state variable for it but use ref is easy
 const name=useRef(null);
  const email =useRef(null);
  const password=useRef(null);
  const handleclick=()=>
  {
    const message=checkvalidate(email.current.value,password.current.value);
    setErrormessage(message);
    if(message) return ;
    if(!isSignINForm)
    {
      // sign up logic
      createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrormessage(errorCode+"-"+errorMessage)
    // ..
  });

    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate("/browse");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrormessage(errorCode+"-"+errorMessage);
      });
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9f46b569-aff7-4975-9b8e-3212e4637f16/453ba2a1-6138-4e3c-9a06-b66f9a2832e4/IN-en-20240415-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg img"
        />
      </div>
      <form
       className="w-3/12 absolute p-12 bg-black bg-opacity-60 rounded-sm my-36 mx-auto right-0 left-0 text-white"
       onSubmit={(e)=>e.preventDefault()}>
        <h1 className="font-bold text-2xl">
          {isSignINForm ? "Sign in" : "Sign Up"}
        </h1>
        {
            !isSignINForm &&( <input
                type="text"
                ref={name}
                placeholder="Full Name"
                className="p-4 my-4 bg-black border-2 border-white w-full rounded-lg"
              />)
        }
        <input
         ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-black border-2 border-white w-full rounded-lg"
        />
        <input
         ref={password}
          type="text"
          placeholder="Password"
          className="p-4 my-4 bg-black  border-2 border-white w-full rounded-lg"
        />
        <p className="text-red-700 font-bold text-lg py-3">{Errormessage}</p>
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleclick}>
          {isSignINForm ? "Sign in" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer underline" onClick={toggleSignInForm}>
          {isSignINForm
            ? "New to Netflix ?  Sign Up now"
            : "Already a user ? Sign in.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
