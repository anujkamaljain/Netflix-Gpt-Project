import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  useMovieTrailer(movieId);

  const trailer = useSelector((store) => store?.movies?.trailerVideo);

  return (
    <div className="h-screen w-screen z-5">
      <iframe
        className="w-screen h-screen aspect-auto cursor-pointer z-5"
        src={"https://www.youtube.com/embed/" + trailer?.key + "?&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&autohide=1&rel=0&fs=1&iv_load_policy=3"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
