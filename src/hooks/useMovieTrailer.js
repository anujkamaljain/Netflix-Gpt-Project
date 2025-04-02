import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import React, { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  const getTrailer = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json?.results.filter((video) => {
      if (video.type == "Trailer") return video;
    });

    const trailer = filterData.length ? filterData[0] : json?.results[0];

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getTrailer();
  }, []);
};

export default useMovieTrailer;
