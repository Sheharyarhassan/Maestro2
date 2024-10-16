import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, useLocation } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "./Components/Common/navbar";
import Footer from "./Components/Common/footer";
import store from "./slices";

const RootComponent = () => {
  const location = useLocation(); // Use hook inside a component
  const isPublicRoute = location.pathname === "/";

  return (
    <>
      <Navbar publicRoute={isPublicRoute} />
      <App />
      <Footer publicRoute={isPublicRoute} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <RootComponent />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// For measuring performance (optional)
reportWebVitals();