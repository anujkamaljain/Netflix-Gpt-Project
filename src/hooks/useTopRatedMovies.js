import { useEffect } from "react";
import { API_OPTIONS, TopRatedMovies_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  const TopRatedMovies = useSelector(store => store.movies.TopRatedMovies);

  const getTopRatedMovies = async () => {
    const data = await fetch(TopRatedMovies_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !TopRatedMovies &&  getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
