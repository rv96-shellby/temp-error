export const moviesConfig = (movies) => {
  return [
    {
      title: "Now Playing",
      moviesKey: "nowPlayingMovies",
      isLargeRow: true,
      dataDirection: "left",
      dataSpeed: "slow",
      dataAnimated: true,
    },
    {
      title: "Popular",
      moviesKey: "popularMovies",
      isLargeRow: false,
      dataAnimated: false,
    },
    {
      title: "Top Rated",
      moviesKey: "topRatedMovies",
      isLargeRow: false,
      dataAnimated: false,
    },
    {
      title: "Upcoming",
      moviesKey: "upComingMovies",
      isLargeRow: false,
      dataAnimated: false,
    },
  ];
};
