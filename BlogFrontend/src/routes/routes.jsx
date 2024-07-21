import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";

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
      }
    ]
  },
]);
