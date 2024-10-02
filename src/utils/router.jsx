import React from 'react';
import { createHashRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../pages/home/home.jsx';
import About from '../pages/about/about.jsx';
import Page404 from '../pages/404/page404.jsx';
import App from '../components/App.jsx'
import Rental from '../pages/detailRental/details.jsx';

// définition route de production ou dev
const basename = process.env.PUBLIC_URL;

console.log("basename :" + basename);

const routes = { 
  path: "/", 
  element: <App />, 
  children: [
    { path: "", element: <Home /> }, 
    { path: "about", element: <About /> }, 
    { path: "details/:id", element: <Rental /> },
    { path: "*", element: <Page404 /> }
  ]
};

// Définir les routes - les enfants de app seront appelés par <Outlet />

const router = process.env.NODE_ENV === 'production' 
  ? createHashRouter([ routes ], { basename })
  : createBrowserRouter([ routes ], {basename});

function Router() {
  
  return (
    <RouterProvider router={router} />
  )
}

export default Router;