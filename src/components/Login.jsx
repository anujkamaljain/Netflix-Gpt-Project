import React from "react";
import Header from "./Header";
import { BGIMG_URL } from "../utils/constants";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { checkValidData } from "../utils/validate";
import { signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [expanded, setExpanded] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigate = useNavigate();

  const email = useRef(null);
  const password = useRef(null);

  const handleClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg) return;

    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/browse");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorMessage === "Firebase: Error (auth/invalid-credential)." && errorCode === "auth/invalid-credential"){
          setErrorMsg("Invalid credentials");
        }
      });
  };

  return (
    <div className="relative h-screen w-screen">
      <Header />

      <div className="absolute inset-0">
        <img
          src={BGIMG_URL}
          alt="Netflix Originals"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      <div className="absolute inset-0 flex justify-center items-center">
        <form
          className="bg-black/70 bg-opacity-70 p-10 w-[400px] text-center"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-white font-bold text-3xl mb-6">Sign In</h2>

          <input
            ref={email}
            type="text"
            placeholder="Email Address"
            className="p-3 w-full border border-gray-600 bg-black/5 text-white rounded-md mb-4"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="p-3 w-full border border-gray-600 bg-black/5 text-white rounded-md mb-6"
          />
          <p className="text-red-500">{errorMsg}</p>
          <button
            className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-md font-semibold cursor-pointer"
            onClick={handleClick}
          >
            Sign In
          </button>
          <h1 className="text-gray-400 text-md text-start mt-6">
            New to Netflix?{" "}
            <Link to="/" className="inline-block">
              <p className="text-white font-semibold">Sign Up Now</p>
            </Link>
          </h1>
          <p className="text-gray-400 text-xs mt-5 text-start mb-3">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </p>

          {expanded && (
            <p className="text-gray-400 text-xs text-start mt-5">
              The information collected by Google reCAPTCHA is subject to the
              Google Privacy Policy and Terms of Service, and is used for
              providing, maintaining, and improving the reCAPTCHA service and
              for general security purposes (it is not used for personalised
              advertising by Google).
            </p>
          )}

          <span
            className="text-blue-400 underline cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? " " : "Learn more."}
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
