import React from "react";
import { Navigate } from "react-router-dom";

import Home from "../application/Home";
import Recommend from "../application/Recommend";
import Singers from "../application/Singers";
import Rank from "../application/Rank";
import Album from "../application/Album";

const routes = [
  // These are the same as the props you provide to <Route>
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "", element: <Navigate to="/recommend" /> },
      {
        path: "recommend/*",
        element: <Recommend />,
        children: [
          {
            path: ":id",
            element: <Album />
          }
        ]
      },
      { path: "singers", element: <Singers /> },
      {
        path: "rank/*",
        element: <Rank />,
        children: [
          {
            path: ":id",
            element: <Album />
          }
        ]
      },
      // Not found routes work as you'd expect
      { path: "*", element: <Navigate to="/recommend" /> }
    ]
  }
];

export default routes;
