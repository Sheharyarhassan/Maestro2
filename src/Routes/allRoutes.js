import React from "react";
import { Navigate } from "react-router-dom";

import Error500 from "../pages/AuthenticationInner/Errors/Error500";

import OnePage from "../pages/Landing/OnePage";

// User Profile
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Rhythm from "../pages/Rhythm";
import Instruments from "../pages/Instruments";
import Game from "../pages/Game";
import Learn from "../pages/Learn"
import Hildey from "../pages/Hildey"
import Composer from "../pages/Composer"
import About from "../pages/About"
import ComposerInnerDetails from "../pages/ComposerInnerDetails"
import Ludwig from "../pages/Ludwig"
import Wolfgang from "../pages/Wolfgang"

import { compose } from "redux";
const authProtectedRoutes = [
  {
    path: "/",
    exact: true,
    component: <Navigate to="/" />,
  },
];

const publicRoutes = [

  { path: "/", component: <OnePage /> },
  {path:"/hildey", component: <Hildey/>},
  {path:"/ludwig", component: <Ludwig/>},
  {path:"/wolfgang", component: <Wolfgang/>},
  { path: "/login", component: <Hildey /> },
  // { path: "/register", component: <Register /> },
  // { path: "/categories", component: <Categories /> },
  { path: "/rhythm", component: <Rhythm /> },
  // { path: "/rhythmDetails/:cardId", component: <RhythmDetails /> },
  { path: "/instruments", component: <Instruments />},
  // { path: "/glossary", component: <Glossary /> },
  // { path:"/watch" , component: <WatchScreen/>},
  { path:"/game" , component: <Game />},
  { path:'/learn', component: <Learn />},
  { path: "/auth-500", component: <Error500 /> },
  {path: "/composer", component: <Composer/>},
  {path: "/about", component: <About/>},
  {path: "/composerInnerDetails/:id", component: <ComposerInnerDetails/>,
  }
];

export { authProtectedRoutes, publicRoutes };
