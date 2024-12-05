import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/slice/userSlice";
import { LOGO } from "../../utils/constants/constants";
import { toggleSearchView } from "../../utils/slice/searchSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./_header.scss";

const Header = () => {
  const DEFAULT_AVATAR = "/images/default-profile-icon.png";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);
  const showSearch = useSelector((store) => store.search.showSearch);

  const [scrollPosition, setScrollPosition] = useState(0);
  const headerRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const headerOpacity = Math.min(scrollPosition / 500, 0.8);

  const handleSignOut = () => {
    localStorage.removeItem("userData");
    localStorage.removeItem("isLoggedIn");
    dispatch(removeUser());
    navigate("/");
  };

  const handleSearch = () => {
    dispatch(toggleSearchView());
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const storedUserData = localStorage.getItem("userData");

    if (isLoggedIn && storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        if (parsedUserData) {
          dispatch(
            addUser({
              uid: parsedUserData.email,
              email: parsedUserData.email,
              displayName: parsedUserData.name,
              photoURL: parsedUserData.photoURL || DEFAULT_AVATAR,
            })
          );
          navigate("/browse");
        }
      } catch (error) {
        console.error("Failed to parse user data:", error);
        dispatch(removeUser());
        navigate("/");
      }
    } else {
      dispatch(removeUser());
      navigate("/");
    }
  }, [dispatch, navigate]);

  useEffect(() => {
    if (user?.uid) {
      navigate("/browse");
    }
  }, [user, navigate]);

  return (
    <div
      ref={headerRef}
      className="header-wrapper"
      style={{
        background: `linear-gradient(to bottom, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, ${headerOpacity}) 100%)`,
        transition: "background 0.3s ease-in-out",
      }}
    >
      <div>
        <a href="/" aria-label="Netflix logo">
          <img alt="Netflix logo" height={45} width={167} src={LOGO} />
        </a>
      </div>

      {user?.uid && (
        <div>
          <button onClick={handleSearch} aria-label="Toggle search">
            <FontAwesomeIcon icon={showSearch ? faTimes : faSearch} />
          </button>

          <img
            height={32}
            width={32}
            alt="profile-icon"
            src={user.photoURL || DEFAULT_AVATAR}
          />

          <button onClick={handleSignOut}>Sign out</button>
        </div>
      )}
    </div>
  );
};

export default Header;
