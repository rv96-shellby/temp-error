import { addTrendingMovies } from "../utils/slice/moviesSlice";
import { BASE_URL, OPTIONS } from "../utils/constants/constants";
import useFetchMovies from "./useFetchMovies";

const useTrendingMovies = () => {
  return useFetchMovies({
    selector: (store) => store.movies.trendingMovies,
    endpoint: {
      url: `${BASE_URL}/trending/all/day?language=en-US`,
      options: OPTIONS,
    },
    actionCreator: addTrendingMovies,
  });
};

export default useTrendingMovies;
