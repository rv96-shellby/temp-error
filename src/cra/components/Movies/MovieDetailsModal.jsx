import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCalendar } from "@fortawesome/free-solid-svg-icons";
import { IMG_CDN_URL } from "../../utils/constants/constants";
import { formatDate, renderRatingStars } from "../../utils/constants/functions";
import { useNavigate } from "react-router-dom";

const MovieDetailsModal = ({ movie, onClose, layout, onNavigate }) => {
  const modalRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  if (!movie) return null;

  const handleNavigateToDetails = () => {
    debugger;
    if (onNavigate) {
      onNavigate(movie.id);
    } else {
      navigate(`/movie/${movie.id}`);
    }
    onClose();
  };

  const getImageUrl = (path) =>
    path ? `${IMG_CDN_URL}${path}` : "https://via.placeholder.com/500x750";

  return (
    <div className="movie-modal">
      <div className="movie-modal__overlay" onClick={onClose}>
        <div
          ref={modalRef}
          className={`movie-modal__content ${layout}`}
          role="dialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <button
            className={`movie-modal__close ${layout}`}
            onClick={onClose}
            aria-label="Close modal"
          >
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {layout === "default" ? (
            <>
              <h2 id="modal-title" className="movie-modal__title">
                {movie.original_title || "Movie Title"}
              </h2>
              <div className="movie-modal__container">
                <div className="movie-modal__container--image">
                  <img
                    src={getImageUrl(movie.poster_path)}
                    alt={movie.title || "Movie poster"}
                    width="233"
                    height="350"
                  />
                </div>
                <div className="movie-modal__container--details">
                  <p id="modal-description">
                    {movie.overview || "No description available."}
                  </p>
                  <p>
                    <FontAwesomeIcon
                      icon={faCalendar}
                      className="movie-modal__icon"
                    />{" "}
                    {movie.release_date
                      ? formatDate(movie.release_date)
                      : "Release date unknown"}
                  </p>
                  <p>
                    Rating:{" "}
                    <span>
                      {movie.vote_average
                        ? renderRatingStars(movie.vote_average)
                        : "No ratings"}
                    </span>
                  </p>
                  <button
                    role="button"
                    onClick={handleNavigateToDetails}
                    aria-label="See full movie details"
                  >
                    See full details
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="movie-modal__container--other">
              <div className="movie-modal__container--other-image">
                <img
                  src={getImageUrl(movie.backdrop_path)}
                  alt={movie.title || "Movie poster"}
                />
              </div>
              <div className="movie-modal__container--other-content">
                <div className="movie-modal__container--other-head">
                  <h2>{movie.original_title || "Movie Title"}</h2>
                  <ul>
                    <li>
                      {movie.release_date
                        ? movie.release_date.slice(0, 4)
                        : "N/A"}
                    </li>
                    <li>{movie.media_type || "Unknown Type"}</li>
                    <li>
                      {movie.original_language
                        ? movie.original_language.toUpperCase()
                        : "Unknown Language"}
                    </li>
                  </ul>
                  <p>{movie.overview || "No description available."}</p>
                </div>
                <div className="movie-modal__container--other-foot">
                  <button role="button" onClick={handleNavigateToDetails}>
                    Get Started
                  </button>
                  <p>Create or restart your membership</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsModal;
