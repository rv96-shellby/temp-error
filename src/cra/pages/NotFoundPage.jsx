import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const NotFoundPage = () => {
  useEffect(() => {
    document.title = "404 | Movie Not Found";
  }, []);

  return (
    <>
      <div className="not-found">
        <h1>Something went wrong</h1>
        <p>Sorry, we couldn't find the page you are looking for.</p>
        <p>To return to the netflix homepage click on the button below.</p>
        <NavLink to="/" title="Go Home">
          Go Home
        </NavLink>
      </div>
    </>
  );
};

export default NotFoundPage;
