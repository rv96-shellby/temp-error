import { useState } from "react";
import { useSelector } from "react-redux";
import MoviesList from "../Movies/MoviesList";
import { moviesConfig } from "../../data/moviesConfig";
import MovieDetailsModal from "../Movies/MovieDetailsModal";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalLayout, setModalLayout] = useState("default");

  if (!movies.nowPlayingMovies) return null;

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setModalLayout("default");
  };

  return (
    <div className="movies--section">
      {moviesConfig(movies).map(
        ({
          title,
          moviesKey,
          isLargeRow,
          dataDirection,
          dataSpeed,
          dataAnimated,
        }) => (
          <MoviesList
            key={moviesKey}
            title={title}
            movies={movies[moviesKey]}
            isLargeRow={isLargeRow}
            dataDirection={dataDirection}
            dataSpeed={dataSpeed}
            dataAnimated={dataAnimated}
            onMovieClick={handleMovieClick}
          />
        )
      )}

      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          layout={modalLayout}
        />
      )}
    </div>
  );
};

export default SecondaryContainer;
