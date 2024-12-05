import { useState } from "react";
import useTrendingMovies from "../../../hooks/useTrendingMovies";
import MovieDetailsModal from "../../Movies/MovieDetailsModal";
import { SMALL_IMG_CDN_URL } from "../../../utils/constants/constants";
import "./_trending.scss";

const TrendingMovies = () => {
  const trendingMovies = useTrendingMovies();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalLayout, setModalLayout] = useState("other");

  if (!trendingMovies) {
    return <div>Loading...</div>;
  }

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setModalLayout("other");
  };

  return (
    <section
      className="section--trending-movies"
      data-section="trending-movies"
    >
      <h2>Trending Movies</h2>
      <div className="movies-container">
        <ul className="movies-list">
          {trendingMovies.map((movie) => (
            <li
              key={movie.id}
              className="movie-card"
              onClick={() => handleMovieClick(movie)}
            >
              <img
                src={`${SMALL_IMG_CDN_URL}${movie.poster_path}`}
                alt={movie.title}
                className="movie-poster"
                loading="lazy"
                height={354}
                width={236}
              />
            </li>
          ))}
        </ul>
      </div>
      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          layout={modalLayout}
        />
      )}
    </section>
  );
};

export default TrendingMovies;
