import { API_OPTIONS, TrendingMovies_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const TrendingMovies = useSelector(store => store.movies.TrendingMovies);

  const getTrendingMovies = async () => {
    const data = await fetch(TrendingMovies_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    !TrendingMovies && getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
