import React from "react";
import Header from "./Header";
import PlanCard from "./PlanCard";
import ReasonCard from "./ReasonCard";
import { BGIMG_URL } from "../utils/constants";
import {
  Reason1_URL,
  Reason2_URL,
  Reason3_URL,
  Reason4_URL,
} from "../utils/constants";
import { Link, Route } from "react-router-dom";

const SignUp = () => {
  function handleSubmit(e) {
    e.preventDefault();
    alert(
      "This feature is currently under development. Please try again later."
    );
  }

  return (
    <div className="relative w-full h-screen overflow-x-hidden">
      <div className="absolute inset-0">
        <div className="inset-0 bg-gradient-to-b from-[#0c0303] via-[#221114] to-[#3b232b] fixed"></div>
      </div>

      <div className="relative flex justify-between items-center p-4">
        <Header />
        <button className="absolute top-8 right-10 bg-white rounded-full w-20 h-8 text-black font-semibold text-center shadow-md hover:bg-white/80 cursor-pointer">
          <Link to="/Login">Sign In</Link>
        </button>
      </div>

      <div className="relative top-20 left-27 shadow-red-500/50">
        <img
          src={BGIMG_URL}
          alt="Netflix Originals"
          className="h-130 rounded-3xl w-7xl"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-transparent to-gray-950/90 rounded-3xl right-60">
          <h1 className="absolute text-white top-40 text-5xl left-85 font-extrabold ">
            Unlimited movies, TV
          </h1>
          <h1 className="absolute text-white top-56 text-5xl left-100 font-extrabold ">
            shows and more
          </h1>
          <h4 className="absolute text-white top-72 text-2xl left-105 ">
            Starts at ₹149. Cancel at anytime.
          </h4>
          <h6 className="absolute text-white top-90 text-lg left-79 ">
            Ready to watch? Enter your email to create or restart your
            membership.
          </h6>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="absolute text-gray-800 p-3.5 top-100 h-14 w-85 text-lg left-79 rounded-4xl bg-white opacity-50 required"
              placeholder="Email address"
              required
            ></input>
            <button
              className="absolute text-white top-100 h-14 w-55 text-lg right-99 rounded-4xl bg-red-700 hover:bg-red-800 cursor-pointer"
              type="submit"
            >
              Get Started
            </button>
          </form>
        </div>

        <h1 className=" text-gray-300 font-semibold mt-7 text-2xl ml-10 -mb-9 absolute">
          A plan to suit your needs
        </h1>
        <div className="flex justify-start absolute">
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

        <h1 className=" text-gray-300 font-bold mt-87 text-4xl ml-10 -mb-9 absolute">
          More reasons to join
        </h1>

        <div className="flex justify-start absolute">
          <ReasonCard
            title="Enjoy on your TV"
            data="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            rate={Reason1_URL}
          />
          <ReasonCard
            title="Download your shows to watch offline"
            data="Save your favourites easily and always have something to watch."
            rate={Reason2_URL}
          />
          <ReasonCard
            title="Watch everywhere"
            data="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
            rate={Reason3_URL}
          />
          <ReasonCard
            title="Create profiles for kids"
            data="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
            rate={Reason4_URL}
          />
        </div>

        <h1 className=" text-gray-300 font-semibold mt-175 text-md ml-10 absolute opacity-60">
          Questions? Call 000-800-919-1743
        </h1>

        <h1 className=" text-gray-300 font-semibold mt-185 text-md ml-10  absolute opacity-60">
          Netflix India
        </h1>
      </div>
    </div>
  );
};

export default SignUp;
