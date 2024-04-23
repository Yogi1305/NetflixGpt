import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignINForm, setIsSIgnInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSIgnInForm(!isSignINForm);
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
      <form className="w-3/12 absolute p-12 bg-black bg-opacity-60 rounded-sm my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-2xl">
          {isSignINForm ? "Sign in" : "Sign Up"}
        </h1>
        {
            !isSignINForm &&( <input
                type="text"
                placeholder="Full Name"
                className="p-4 my-4 bg-black border-2 border-white w-full rounded-lg"
              />)
        }
        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 bg-black border-2 border-white w-full rounded-lg"
        />
        <input
          type="text"
          placeholder="Password"
          className="p-4 my-4 bg-black  border-2 border-white w-full rounded-lg"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignINForm ? "Sign in" : "Sign Up"}
        </button>
        <p className="p-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignINForm
            ? "New to Netflix ? Sign Up now"
            : "Already a user ? Sign in.."}
        </p>
      </form>
    </div>
  );
};

export default Login;
