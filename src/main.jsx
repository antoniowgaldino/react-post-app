import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Home } from './pages/home/home.jsx';
import { Login } from './pages/login/login.jsx';
import { Post } from './pages/post/post.jsx';

const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/post",
    element: <Post />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
