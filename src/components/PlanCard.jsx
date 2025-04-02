import React from "react";

const PlanCard = ({ title, quality, char1, char2, rate }) => {
  return (
    <div
      className={`h-56 w-76 ${
        title === "Mobile"
          ? "bg-gradient-to-br from-blue-900 to-black"
          : title === "Basic"
          ? "bg-gradient-to-br from-[#182a9c] to-black"
          : title === "Standard"
          ? "bg-gradient-to-br from-purple-900 via-blue-950 to-black"
          : "bg-gradient-to-br from-red-900 via-purple-950 to-black"
      }   rounded-2xl shadow-lg mt-6 ml-3.5 text-white `}
    >
      <h1 className="text-2xl font-semibold mt-6 ml-5">{title}</h1>
      <h3 className="opacity-75 font-semibold my-2 ml-5">{quality}</h3>
      <h3 className="opacity-75 font-semibold mt-2 mb-0 ml-5 text-sm">
        {char1}
      </h3>
      <h4 className="opacity-75 font-semibold mb-0 ml-5 text-sm">
        {title === "Premium" ? "✓ Immersive sound (spatial audio)" : " "}
      </h4>
      <h3 className="opacity-75 font-semibold mb-0 ml-5 text-sm">{char2}</h3>
      <h3
        className={`opacity-75 font-semibold ml-5 text-xl ${
          title === "Premium" ? "mt-6" : "mt-11"
        }`}
      >
        {rate}
      </h3>
    </div>
  );
};

export default PlanCard;
