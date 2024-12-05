import { useState } from "react";
import MovieCard from "./SearchMovieCard";
import MovieDetailsModal from "../Movies/MovieDetailsModal";

const SearchMovieList = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalLayout, setModalLayout] = useState("default");

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setModalLayout("default");
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <section className="row">
      <h2>Movie List</h2>
      <article>
        <div className="searchMovieCard__container">
          {movies?.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie?.poster_path}
              altText={movie.title}
              releaseDate={movie?.release_date}
              onClick={() => openModal(movie)}
            />
          ))}
        </div>
      </article>

      {selectedMovie && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={closeModal}
          layout={modalLayout}
        />
      )}
    </section>
  );
};

export default SearchMovieList;
