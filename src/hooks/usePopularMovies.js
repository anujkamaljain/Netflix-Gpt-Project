import { useEffect } from "react";
import { API_OPTIONS, PopularMovies_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(store => store.movies.PopularMovies);

  const getPopularMovies = async () => {
    const data = await fetch(PopularMovies_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
   !popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
