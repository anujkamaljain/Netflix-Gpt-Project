import { API_OPTIONS, NowPlayingMovies_URL } from "../utils/constants";
import { useEffect } from "react";
import { useDispatch, useSelector} from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const NowPlayingMovies = useSelector(store => store.movies.nowPlayingMovies);

  const getNowPlayingMovies = async () => {
    const data = await fetch(NowPlayingMovies_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    !NowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
