import React from "react";
import { Navigate } from "react-router-dom";

import Error500 from "../pages/AuthenticationInner/Errors/Error500";

import OnePage from "../pages/Landing/OnePage";

// User Profile
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import Categories from "../pages/Categories";
import Rhythm from "../pages/Rhythm";
import RhythmDetails from "../pages/Rhythm/RhythmDetails.js";
import Instruments from "../pages/Instruments";
import Game from "../pages/Game";
import WatchScreen from "../pages/WatchScreen/index.js";
import Glossary from "../pages/Glossary";
import Learn from "../pages/Learn"
import Hildey from "../pages/Hildey"
import Composer from "../pages/Composer"
import ComposerDetails from "../pages/ComposerDetails"
import { compose } from "redux";
const authProtectedRoutes = [
  {
    path: "/",
    exact: true,
    component: <Navigate to="/" />,
  },
];

const publicRoutes = [

  { path: "/hildey", component: <OnePage /> },
  {path:"/", component: <Hildey/>},
  { path: "/login", component: <Hildey /> },
  // { path: "/register", component: <Register /> },
  { path: "/categories", component: <Categories /> },
  { path: "/rhythm", component: <Rhythm /> },
  { path: "/rhythmDetails/:cardId", component: <RhythmDetails /> },
  { path: "/instruments", component: <Instruments />},
  { path: "/glossary", component: <Glossary /> },
  { path:"/watch" , component: <WatchScreen/>},
  { path:"/game" , component: <Game />},
  { path:'/learn', component: <Learn />},
  { path: "/auth-500", component: <Error500 /> },
  {path: "/composer", component: <Composer/>},
  {path: "/composerDetails", component: <ComposerDetails/>,
  }
];

export { authProtectedRoutes, publicRoutes };
