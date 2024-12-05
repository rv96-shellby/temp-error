import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setMovieDetails,
  setTrailers,
  setSimilarMovies,
  setLoading,
} from "../utils/slice/moviesSlice";
import { API_URL, OPTIONS } from "../utils/constants/constants";

const useMovieDetails = (id) => {
  const dispatch = useDispatch();

  const movieDetails = useSelector((state) => state.movies.movieDetails);
  const trailers = useSelector((state) => state.movies.trailerVideo);
  const similarMovies = useSelector((state) => state.movies.similarMovies);
  const loading = useSelector((state) => state.movies.loading);

  const fetchData = async (url) => {
    try {
      const response = await fetch(url, OPTIONS);
      if (!response.ok) {
        throw new Error(
          `Failed to fetch: ${response.status} ${response.statusText}`
        );
      }
      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      dispatch(setLoading(true));

      try {
        const movieData = await fetchData(`${API_URL}/${id}?language=en-US`);
        if (movieData) {
          dispatch(setMovieDetails(movieData));
        }

        const trailersData = await fetchData(
          `${API_URL}/${id}/videos?language=en-US`
        );
        if (trailersData && trailersData.results) {
          const trailerData = trailersData.results.filter(
            (video) => video.type === "Trailer"
          );
          dispatch(setTrailers(trailerData));
        }

        const similarData = await fetchData(
          `${API_URL}/${id}/similar?language=en-US`
        );
        if (similarData && similarData.results) {
          dispatch(setSimilarMovies(similarData.results));
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      } finally {
        dispatch(setLoading(false));
      }
    };

    if (!movieDetails || !trailers || !similarMovies) {
      fetchMovieDetails();
    }
  }, [id, movieDetails, trailers, similarMovies, dispatch]);

  return { movieDetails, trailers, similarMovies, loading };
};

export default useMovieDetails;
