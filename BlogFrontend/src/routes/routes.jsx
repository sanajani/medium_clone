import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import Notifications from "../pages/Notifications";

// import HomeAuth from "../pages/HomeAuth";
// const login = false;


export const routes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout/>
    ),
    children:[
      // {
      //   path: "",
      //   element: login? <Home />:<HomeAuth />,
      // },
      {
        path:'',
        element: <Home />
      },
      {
        path:'notifications',
        element: <Notifications />,
        children:[
          {
            path: 'all',
            element: <h1>All</h1>
          },
          {
            path: 'response',
            element: <h1>Responses</h1>
          },
        ]
      },

    ]
  },
]);
