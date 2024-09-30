import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import About from '../pages/about/about.jsx';
import Page404 from '../pages/404/page404.jsx';
import App from '../components/App.jsx'
import Rental from '../pages/detailRental/details.jsx';

// définition route de production ou dev
const basename = process.env.NODE_ENV === 'production' 
  ? '/OCR-DevWeb-Projet5-Kaza' 
  : '/'; // Valeur par défaut pour le développement

// Définir les routes - les enfants de app seront appelés par <Outlet />
const router = createBrowserRouter([
  {
    path: basename,
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
        path: "details/:id",
        element: <Rental />
      },
      {
        path: "*",
        element: <Page404 />,
      },
    ],
  },
]);

function Router() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default Router;