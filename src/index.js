import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import NotFound from './pages/NotFound';
import Login from './components/login/Login';
import Record from './pages/Record';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Login /> },
      { path: 'record', element: <Record /> },
      { path: 'user01', element: <Login userId='nfc01@nfc.com' userPw='wearecyborgs'/> },
      { path: 'user02', element: <Login userId='nfc02@nfc.com' userPw='wearecyborgs'/> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

