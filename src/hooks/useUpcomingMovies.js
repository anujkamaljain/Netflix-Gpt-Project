import { API_OPTIONS, UpcomingMovies_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const data = await fetch(UpcomingMovies_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
