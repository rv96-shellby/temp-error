import { IMG_CDN_URL } from "../../utils/constants/constants";

const MoviesCard = ({
  posterPath,
  altText,
  className,
  backdropPath,
  onClick,
}) => {
  if (!posterPath && !backdropPath) return null;

  const imagePath = className ? posterPath : backdropPath;
  if (!imagePath) return null;

  return (
    <img
      className={`row__poster ${className ? "row__posterLarge" : ""}`}
      src={`${IMG_CDN_URL}${imagePath}`}
      alt={altText}
      loading="lazy"
      onClick={onClick}
    />
  );
};

export default MoviesCard;
