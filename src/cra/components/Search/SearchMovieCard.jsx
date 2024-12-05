import { IMG_CDN_URL } from "../../utils/constants/constants";

const SearchMovieCard = ({ posterPath, altText, releaseDate, onClick }) => {
  return (
    <div className="searchMovieCard__container--card" onClick={onClick}>
      <div>
        <img
          src={IMG_CDN_URL + posterPath}
          alt={altText}
          loading="lazy"
          width="233"
          height="350"
        />
      </div>
      <div>
        <h2>{altText}</h2>
        <div>
          <span>RD: {releaseDate}</span>
        </div>
      </div>
    </div>
  );
};

export default SearchMovieCard;
