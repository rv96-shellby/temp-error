import MoviesCard from "./MoviesCard";

const MoviesList = ({
  title,
  movies,
  isLargeRow,
  dataDirection,
  dataSpeed,
  dataAnimated,
  onMovieClick,
}) => {
  return (
    <section className="row">
      <h2>{title}</h2>
      <article
        className="row__posters scroller"
        data-animated={dataAnimated}
        data-direction={dataDirection}
        data-speed={dataSpeed}
      >
        <div className="scroller__inner">
          {movies?.map((movie) => (
            <MoviesCard
              key={movie.id}
              posterPath={movie.poster_path}
              backdropPath={movie.backdrop_path}
              altText={movie ? movie.title : ""}
              className={isLargeRow}
              onClick={() => onMovieClick(movie)}
            />
          ))}
        </div>
      </article>
    </section>
  );
};

export default MoviesList;
