import { useSelector } from "react-redux";
import SearchMovieList from "./SearchMovieList";

const SearchMovieSuggestions = () => {
  const { movieResults, movieNames } = useSelector((store) => store.search);

  if (!movieNames || !movieResults) return null;

  return (
    <div className="search-wrapper__movieSuggestions">
      <>
        <SearchMovieList title={movieNames} movies={movieResults} />
      </>
    </div>
  );
};

export default SearchMovieSuggestions;
