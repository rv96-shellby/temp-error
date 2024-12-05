import { API_URL, OPTIONS } from "../utils/constants/constants";
import { addTopRatedMovies } from "../utils/slice/moviesSlice";
import useFetchMovies from "./useFetchMovies";

const useTopRatedMovies = () => {
  return useFetchMovies({
    selector: (store) => store.movies.topRatedMovies,
    endpoint: {
      url: `${API_URL}/top_rated?language=en-US&page=1`,
      options: OPTIONS,
    },
    actionCreator: addTopRatedMovies,
  });
};

export default useTopRatedMovies;
