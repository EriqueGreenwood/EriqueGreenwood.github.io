import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Homepage from './Components/Homepage';
import Projects from './Components/Projects';

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Homepage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
