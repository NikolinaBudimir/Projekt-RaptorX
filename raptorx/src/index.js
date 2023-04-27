import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Clanovi from './ekrani/Clanovi';
import Galerija from './ekrani/Galerija';
import Kontakt from './ekrani/Kontakt';
import Upit from './ekrani/Upit';
import Prijava from './ekrani/Prijava';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "clanovi",
    element: <Clanovi />,
  },
  {
    path: "galerija",
    element: <Galerija />,
  },
  {
    path: "kontakt",
    element: <Kontakt />,
  },
  {
    path: "upit",
    element: <Upit />,
  },
  {
    path: "prijava",
    element: <Prijava />,
  },
 
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
