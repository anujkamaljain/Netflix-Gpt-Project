import React, { useRef, useState } from "react";
import Header from "./Header";
import PlanCard from "./PlanCard";
import ReasonCard from "./ReasonCard";
import {
  BGIMG_URL,
  Reason1_URL,
  Reason2_URL,
  Reason3_URL,
  Reason4_URL,
} from "../utils/constants";
import { auth } from "../utils/firebase";
import { Link } from "react-router-dom";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword } from "firebase/auth";

const SignUp = () => {
  const email = useRef(null);
  const password = useRef(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleClick = () => {
    const msg = checkValidData(email.current.value, password.current.value);
    setErrorMsg(msg);
    if (msg) return;

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        setErrorMsg(error.message + " - " + error.code);
      });
  };

  return (
    <div className="relative w-full min-h-screen bg-gradient-to-b from-[#0c0303] via-[#30171c] to-[#3b232b]">
      <div className="relative flex flex-col items-center p-4">
        <Header />
        <button className="absolute top-6 right-6 bg-white text-black font-semibold rounded-4xl px-4 py-2 shadow-md hover:bg-white/80 z-20">
          <Link to="/Login">Sign In</Link>
        </button>
      </div>

      <div className="relative flex flex-col items-center mt-12 px-4 text-center text-white overflow-x-hidden">
        <img
          src={BGIMG_URL}
          alt="Netflix Originals"
          className="relative lg:w-full lg:max-w-5xl rounded-lg shadow-lg opacity-50 mt-5 md:max-h-fit overflow-x-hidden"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg md:p-6 p-3 md:mt-10 mt-5">
          <div className="md:p-6 p-3">
            <h1 className="md:text-4xl text-2xl font-extrabold">
              Unlimited movies, TV
            </h1>
            <h1 className="text-2xl md:text-4xl md:mt-2 mt-0.5 font-extrabold">
              {" "}
              shows, and more{" "}
            </h1>
            <h4 className="lg:text-xl md:text-lg text-xs my-2 ">
              Starts at ₹149. Cancel at any time.
            </h4>
            <p className="md:mt-1 md:text-sm text-xs mt-0.5">
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="md:mt-5 mt-2 flex md:flex-col justify-center items-center flex-row gap-2"
            >
              <input
                ref={email}
                type="text"
                className="p-3.5 text-gray-800 lg:w-80 md:w-56 w-24 h-2 md:h-14 rounded-4xl bg-white opacity-60"
                placeholder="Email Address"
              />
              <input
                ref={password}
                type="password"
                className="p-3.5 lg:w-80 md:w-56 w-24 text-gray-800 h-2 md:h-14 rounded-4xl bg-white opacity-60"
                placeholder="Password"
              />
              <button
                className="bg-red-700 px-6 md:py-3 py-0 h-7 md:h-12 rounded-4xl md:text-lg text-sm cursor-pointer hover:bg-red-800 text-white lg:w-80 md:w-56 w-fit text-center "
                onClick={handleClick}
              >
                Get Started
              </button>
            </form>
            {errorMsg && <p className="text-red-500 mt-2">{errorMsg}</p>}
          </div>
        </div>
      </div>

      <div className="px-8 text-white">
        <h2 className=" lg:mt-15 lg:mx-22 md:mt-9 md:mx-10 mt-5 mx-4 md:text-3xl text-lg font-bold md:mb-3">
          A plan to suit your needs
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-center items-center ">
          <PlanCard
            title="Mobile"
            quality="480p"
            char1="✓ Fair video quality"
            char2="✓ For your phone or tablet"
            rate="₹149 /mo"
          />
          <PlanCard
            title="Basic"
            quality="720p"
            char1="✓ Good video quality"
            char2="✓ For your phone, tablet, laptop and TV"
            rate="₹199 /mo"
          />
          <PlanCard
            title="Standard"
            quality="1080p"
            char1="✓ Great video quality"
            char2="✓ For your phone, tablet, laptop and TV"
            rate="₹499 /mo"
          />
          <PlanCard
            title="Premium"
            quality="4K + HDR"
            char1="✓ Best video quality"
            char2="✓ For your phone, tablet, laptop and TV"
            rate="₹649 /mo"
          />
        </div>
      </div>

      <div className="px-8 text-white">
        <h2 className="lg:mt-9 md:mt-9 md:mx-13 lg:mx-19 mt-5 mx-4 md:text-4xl text-xl font-bold">
          More reasons to join
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <ReasonCard
            title="Enjoy on your TV"
            data="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            rate={Reason1_URL}
          />
          <ReasonCard
            title="Download to watch offline"
            data="Save your favorites easily and always have something to watch."
            rate={Reason2_URL}
          />
          <ReasonCard
            title="Watch everywhere"
            data="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
            rate={Reason3_URL}
          />
          <ReasonCard
            title="Create profiles for kids"
            data="Send kids on adventures with their favorite characters in a space made just for them — free with your membership."
            rate={Reason4_URL}
          />
        </div>
      </div>

      <footer className="mt-15 ml-14 px-4 text-gray-500 text-sm">
        <p>Questions? Call 000-800-919-1743</p>
        <p className="mt-2">Netflix India</p>
      </footer>
    </div>
  );
};

export default SignUp;
