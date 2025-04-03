import { API_OPTIONS, UpcomingMovies_URL } from "../utils/constants";
import { useDispatch , useSelector} from "react-redux";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const UpcomingMovies = useSelector(store => store.movies.UpcomingMovies);

  const getUpcomingMovies = async () => {
    const data = await fetch(UpcomingMovies_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
  useEffect(() => {
    !UpcomingMovies && getUpcomingMovies();
  }, []);
};

export default useUpcomingMovies;
