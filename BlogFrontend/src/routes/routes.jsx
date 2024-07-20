import {createBrowserRouter} from 'react-router-dom'

export const routes = createBrowserRouter([
    {
      path: "/",
      element: <h1>Hello Home</h1>,
      children: [
        {
          path: "contact",
          element: <h1>Hello contact</h1>,
        },
        {
          path: "dashboard",
          element: <h1>Hello dashboard</h1>,
          loader: ({ request }) =>
            fetch("/api/dashboard.json", {
              signal: request.signal,
            }),
        },
        {
        element: <h1>Hello auth</h1>,
            children: [
            {
              path: "login",
              element: <h1>Hello login</h1>,
            //   loader: redirectIfUser,
            },
            {
              path: "logout",
            //   action: logoutUser,
            },
          ],
        },
      ],
    },
  ]);