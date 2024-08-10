import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles.css';
import { Animazing } from './Animazing';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'animate.css';import 'animate.css';


const router = createBrowserRouter([
  {
    path: '*',
    element: <Animazing/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={ router } />
  // </React.StrictMode>,
)
