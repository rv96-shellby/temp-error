import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt,
  faStar as faStarOutline,
} from "@fortawesome/free-solid-svg-icons";

export const truncate = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + " ..." : string;
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(date);
};

export const renderRatingStars = (rating) => {
  const fullStars = Math.floor(rating / 2);
  const halfStar = rating % 2 >= 1;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <>
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon
          key={`full-${index}`}
          icon={faStar}
          className="movie-modal__star movie-modal__star--full"
        />
      ))}
      {halfStar && (
        <FontAwesomeIcon
          icon={faStarHalfAlt}
          className="movie-modal__star movie-modal__star--half"
        />
      )}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon
          key={`empty-${index}`}
          icon={faStarOutline}
          className="movie-modal__star movie-modal__star--empty"
        />
      ))}
    </>
  );
};
