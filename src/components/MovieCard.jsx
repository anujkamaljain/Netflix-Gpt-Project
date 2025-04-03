import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 pr-4 cursor-pointer hover:-translate-y-1 transition ease-in-out ">
      <img alt="moviecard" src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
