import { API_URL, OPTIONS } from "../utils/constants/constants";
import { addPopularMovies } from "../utils/slice/moviesSlice";
import useFetchMovies from "./useFetchMovies";

const usePopularMovies = () => {
  return useFetchMovies({
    selector: (store) => store.movies.popularMovies,
    endpoint: {
      url: `${API_URL}/popular?language=en-US&page=1`,
      options: OPTIONS,
    },
    actionCreator: addPopularMovies,
  });
};

export default usePopularMovies;
