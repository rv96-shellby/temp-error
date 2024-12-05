import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useMovieDetails from "../../hooks/useMovieDetails";
import { IMG_CDN_URL } from "../../utils/constants/constants";
import { formatDate } from "../../utils/constants/functions";
import MovieDetailsModal from "../Movies/MovieDetailsModal";
import MoviesList from "../Movies/MoviesList";

const MovieDetails = () => {
  const fallbackImage =
    "https://via.placeholder.com/500x750?text=No+Image+Available";

  const { id } = useParams();
  const navigate = useNavigate();
  const { movieDetails, trailers, similarMovies, loading } =
    useMovieDetails(id);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalLayout, setModalLayout] = useState("default");

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!movieDetails) {
    return <div>No movie details found</div>;
  }

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setModalLayout("default");
  };

  const handleNavigateToDetails = (movieId) => {
    navigate(`/movie/${movieId.id}`, { replace: true });
    setSelectedMovie(null);
  };

  return (
    <div className="movie-details">
      {trailers?.length > 0 && (
        <div className="movie-details__trailers">
          <div className="trailer-video">
            <iframe
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${trailers[1]?.key}`}
              frameBorder="0"
              allowFullScreen
              title="Trailer"
            />
          </div>
        </div>
      )}

      <div className="movie-details__info">
        <div className="movie-content">
          <h2>
            {movieDetails.original_title} | {movieDetails.tagline}
          </h2>
          <p>
            {formatDate(movieDetails.release_date)} |{" "}
            {movieDetails.original_language.toUpperCase()}
          </p>
          <p>{movieDetails.overview}</p>
        </div>

        <div className="movie-image">
          <a
            role="link"
            target="_blank"
            rel="noreferrer"
            href={movieDetails.homepage}
          >
            <img
              src={IMG_CDN_URL + movieDetails.poster_path}
              alt="movie poster"
              className="movie-poster"
              loading="lazy"
              onError={(e) => (e.target.src = fallbackImage)}
            />
          </a>
        </div>
      </div>

      {similarMovies?.length > 0 && (
        <MoviesList
          title="Similar Movies"
          movies={similarMovies}
          isLargeRow={false}
          dataDirection="horizontal"
          dataSpeed={false}
          dataAnimated={false}
          onMovieClick={handleMovieClick}
        />
      )}
      {!similarMovies?.length && <p>No similar movies available.</p>}

      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          layout={modalLayout}
          onNavigate={handleNavigateToDetails}
        />
      )}
    </div>
  );
};

export default MovieDetails;
