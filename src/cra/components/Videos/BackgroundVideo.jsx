import useMovieTrailer from "../../hooks/useMovieTrailer";

const BackgroundVideo = ({ id }) => {
  const trailerVideo = useMovieTrailer(id);

  if (!trailerVideo) return null;

  return (
    <div className="container--video">
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${trailerVideo.key}?autoplay=1&showinfo=0&mute=1&rel=0&modestbranding=1&showinfo=0&controls=0&autohide=1&wmode=opaque`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <span className="gradient"></span>
    </div>
  );
};

export default BackgroundVideo;
