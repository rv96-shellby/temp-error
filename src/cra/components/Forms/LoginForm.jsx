import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../utils/slice/userSlice";
import { USER_AVATAR } from "../../utils/constants/constants";
import { checkValidData } from "../../utils/validations/validate";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (user?.uid) {
      navigate("/browse");
    }
  }, [user, navigate]);

  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") setNameValue(value);
    if (name === "email") setEmailValue(value);
    if (name === "password") setPasswordValue(value);
  };

  const handleButtonClick = () => {
    const message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm && !nameValue.trim()) {
      setErrorMessage("Name is required.");
      return;
    }

    if (!isSignInForm) {
      const existingUser = JSON.parse(localStorage.getItem(emailValue));
      if (existingUser) {
        setErrorMessage("User already exists. Please sign in.");
        return;
      }

      const userData = {
        name: nameValue,
        email: emailValue,
        password: passwordValue,
        photoURL: USER_AVATAR,
      };

      localStorage.setItem(emailValue, JSON.stringify(userData));
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userData", JSON.stringify(userData));

      dispatch(
        addUser({
          uid: emailValue,
          email: emailValue,
          displayName: nameValue,
          photoURL: USER_AVATAR,
        })
      );
    } else {
      const storedUser = JSON.parse(localStorage.getItem(emailValue));
      if (!storedUser || storedUser.password !== passwordValue) {
        setErrorMessage("Invalid email or password.");
        return;
      }

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("userData", JSON.stringify(storedUser));

      dispatch(
        addUser({
          uid: emailValue,
          email: emailValue,
          displayName: storedUser.name,
          photoURL: storedUser.photoURL || USER_AVATAR,
        })
      );
    }

    setErrorMessage(null);
    navigate("/browse");
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className="login-wrapper__body--content">
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm && (
          <input
            name="name"
            value={nameValue}
            onChange={handleInputChange}
            type="text"
            placeholder="Full Name"
            aria-label="Name"
          />
        )}
        <input
          name="email"
          value={emailValue}
          onChange={handleInputChange}
          type="text"
          placeholder="Email Address"
          aria-label="Email"
        />
        <input
          name="password"
          value={passwordValue}
          onChange={handleInputChange}
          type="password"
          placeholder="Password"
          aria-label="Password"
        />
        <p className="error">{errorMessage}</p>
        <div className="button-container">
          <button onClick={handleButtonClick}>
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        </div>

        <div className="content-container">
          <p className="cursor-pointer" onClick={toggleSignInForm}>
            {isSignInForm
              ? "New to Netflix? Sign Up Now"
              : "Already registered? Sign In Now."}
          </p>
          <p className="tnc">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
