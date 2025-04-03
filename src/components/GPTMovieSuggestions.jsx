import React from "react";
import { useSelector } from "react-redux";
import Shimmer from "./shimmer";
import MovieList from "./MovieList";

const GPTMovieSuggestions = () => {
  const SearchButtonClickStatus = useSelector(
    (store) => store.gpt.SearchButtonClick
  );

  const ApiKeySubmitButtonClickstatus = useSelector(
    (store) => store.user.API_KEY
  );

  const { tmdbmovieResults, geminiMovieNames } = useSelector(
    (store) => store.gpt
  );

  if (
    !tmdbmovieResults &&
    !geminiMovieNames &&
    ApiKeySubmitButtonClickstatus &&
    SearchButtonClickStatus
  ) {
    return <Shimmer />;
  } else if (geminiMovieNames === null) {
    return null;
  } else {
    return (
      <div className="p-4 m-4 text-white z-1">
        <div>
          {geminiMovieNames.map((movieName, index) => {
            return (
              <MovieList
                key={movieName}
                title={movieName}
                movies={tmdbmovieResults[index]}
              />
            );
          })}
        </div>
      </div>
    );
  }
};

export default GPTMovieSuggestions;
