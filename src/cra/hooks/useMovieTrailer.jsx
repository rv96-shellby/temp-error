import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/slice/moviesSlice";
import { API_URL, OPTIONS } from "../utils/constants/constants";

const useMovieTrailer = (id) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const fetchTrailerVideo = async () => {
    try {
      const response = await fetch(
        `${API_URL}/${id}/videos?language=en-US`,
        OPTIONS
      );
      const json = await response.json();
      if (json.results) {
        const trailer =
          json.results.find((v) => v.type === "Trailer") || json.results[0];
        dispatch(addTrailerVideo(trailer));
      } else {
        console.error("No trailer found.");
      }
    } catch (error) {
      console.error("Error fetching trailer video:", error);
    }
  };

  useEffect(() => {
    if (!trailerVideo) {
      fetchTrailerVideo();
    }
  }, [trailerVideo, id]);

  return trailerVideo;
};

export default useMovieTrailer;
