import { API_OPTIONS, TrendingMovies_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrendingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
  const dispatch = useDispatch();

  const getTrendingMovies = async () => {
    const data = await fetch(TrendingMovies_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addTrendingMovies(json.results));
  };
  useEffect(() => {
    getTrendingMovies();
  }, []);
};

export default useTrendingMovies;
