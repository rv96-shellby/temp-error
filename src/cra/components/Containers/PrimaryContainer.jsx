import { useState } from "react";
import { useSelector } from "react-redux";
import BackgroundVideo from "../Videos/BackgroundVideo";
import MovieDetailsModal from "../Movies/MovieDetailsModal";
import { truncate } from "../../utils/constants/functions";

const PrimaryContainer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [modalLayout, setModalLayout] = useState("default");

  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return null;

  const mainMovie = movies[0];
  const { original_title, overview, id } = mainMovie;

  const handleMoreInfoClick = () => {
    setSelectedMovie(mainMovie);
    setIsModalOpen(true);
    setModalLayout("default");
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="container">
      <div className="container--content">
        <h1>{original_title}</h1>
        <p>{truncate(overview, 150)}</p>
        <div className="buttons">
          <button>▶ Play</button>
          <button onClick={handleMoreInfoClick}>More Info</button>
        </div>
      </div>

      <BackgroundVideo id={id} />

      {isModalOpen && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleCloseModal}
          layout={modalLayout}
        />
      )}
    </div>
  );
};

export default PrimaryContainer;
