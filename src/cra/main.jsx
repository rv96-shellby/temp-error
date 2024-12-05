import React from "react";
import ReactDOM from "react-dom/client";
import RoutesConfig from "./routes/RoutesConfig";
import { Provider } from "react-redux";
import appStore from "../cra/utils/store/appStore";
import "./scss/main.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export function App() {
  return <RoutesConfig />;
}

export function Main() {
  return (
    <React.StrictMode>
      <Provider store={appStore}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<Main />);
}
