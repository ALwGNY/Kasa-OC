import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import Errorpage from './Pages/Errorpage';
import About from './Pages/about';
import Appartment from './Pages/Appartements';

const router = createBrowserRouter([
  {
    path: "/accueil",
    element: <App/>
  },
  {
    path: '/about',
    element: <About/> 
  },
  {
    path: '/Appartement',
    element: <Appartment/>
  },
  {
    path:'/',
    errorElement: <Errorpage/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
