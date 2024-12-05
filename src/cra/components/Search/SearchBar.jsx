import { useRef } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS, global } from "../../utils/constants/constants";
import { addMovieResult } from "../../utils/slice/searchSlice";

const SearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovie = async (query) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(
        query
      )}&include_adult=false&language=en-US&page=1`,
      OPTIONS
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json.results;
  };

  const handleSearchClick = async () => {
    const query = searchText.current.value.trim();

    if (query) {
      try {
        const results = await searchMovie(query);

        if (!results || results.length === 0) {
          alert(`No movies found for "${query}". Please try again.`);
        } else {
          dispatch(
            addMovieResult({ movieNames: query, movieResults: results })
          );
          searchText.current.value = "";
        }
      } catch (error) {
        alert("An error occurred while searching. Please try again.");
        console.error("Search error:", error);
      }
    } else {
      alert("Please enter a valid search query.");
    }
  };

  return (
    <div className="search-wrapper__search">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSearchClick();
        }}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={global.en.searchPlaceholder}
        />
        <button type="submit">{global.en.search}</button>
      </form>
    </div>
  );
};

export default SearchBar;
