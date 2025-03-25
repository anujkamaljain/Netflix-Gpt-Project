import React from "react";

const ReasonCard = ({ title, data, rate }) => {
  return (
    <div
      className={`relative h-56 w-76 bg-[rgba(0,0,0,0.4)] rounded-2xl shadow-lg mt-102 ml-3.5 text-white mb-20`}
    >
      <h1 className="text-2xl font-semibold mt-6 ml-5">{title}</h1>
      <h4 className="opacity-75 font-semibold mb-0 ml-5 text-sm">
        {title === "Premium" ? "✓ Immersive sound (spatial audio)" : " "}
      </h4>
      <h3 className="opacity-75 font-semibold mt-4 ml-5 text-sm">{data}</h3>
      <img src={rate} alt="imges" className="absolute w-16 h-16 rounded-xl mix-blend-color-dodge bottom-2 right-2"/>
    </div>
  );
};

export default ReasonCard;
