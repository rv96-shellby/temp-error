import { API_URL, OPTIONS } from "../utils/constants/constants";
import { addNowPlayingMovies } from "../utils/slice/moviesSlice";
import useFetchMovies from "./useFetchMovies";

const useNowPlayingMovies = () => {
  return useFetchMovies({
    selector: (store) => store.movies.nowPlayingMovies,
    endpoint: {
      url: `${API_URL}/now_playing?language=en-US&page=1`,
      options: OPTIONS,
    },
    actionCreator: addNowPlayingMovies,
  });
};

export default useNowPlayingMovies;
