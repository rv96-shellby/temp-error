import SearchBar from "../components/Search/SearchBar";
import SearchMovieSuggestions from "../components/Search/SearchMovieSuggestions";

const SearchPage = () => {
  return (
    <div className="search-wrapper">
      <SearchBar />
      <SearchMovieSuggestions />
    </div>
  );
};

export default SearchPage;
