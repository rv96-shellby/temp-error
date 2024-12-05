import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import PrimaryContainer from "../components/Containers/PrimaryContainer";
import SecondaryContainer from "../components/Containers/SecondaryContainer";

const BrowsePage = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpcomingMovies();

  return (
    <div className="browse-wrapper">
      <>
        <PrimaryContainer />
        <SecondaryContainer />
      </>
    </div>
  );
};

export default BrowsePage;
