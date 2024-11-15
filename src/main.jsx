import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Login } from './pages/login/login.jsx';
import { Layout } from './components/layout/Layout.jsx';
import { routes } from './routes/routes.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    element: <Layout />,
    children: routes,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
