import Header from "../components/Header/Header";
import LoginForm from "../components/Forms/LoginForm";

const LoginPage = () => {
  return (
    <div className="login-wrapper">
      <div className="absolute login-wrapper__background">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="logo"
        />
      </div>
      <div className="relative login-wrapper__header">
        <Header />
      </div>
      <div className="login-wrapper__body">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
