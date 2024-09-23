import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import About from '../pages/about/about.jsx';
import Page404 from '../pages/404/page404.jsx';
import App from '../components/App.jsx'

// Définir les routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

function Router() {
  return <RouterProvider router={router} />
}

export default Router;