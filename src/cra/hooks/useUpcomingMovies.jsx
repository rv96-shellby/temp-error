import { API_URL, OPTIONS } from "../utils/constants/constants";
import { addUpcomingMovies } from "../utils/slice/moviesSlice";
import useFetchMovies from "./useFetchMovies";

const useUpcomingMovies = () => {
  return useFetchMovies({
    selector: (store) => store.movies.upComingMovies,
    endpoint: {
      url: `${API_URL}/upcoming?language=en-US&page=1`,
      options: OPTIONS,
    },
    actionCreator: addUpcomingMovies,
  });
};

export default useUpcomingMovies;
