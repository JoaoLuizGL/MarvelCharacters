import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//Pages
import Home from './routes/Home.tsx'
import Character from './routes/Character.tsx'


const router = createBrowserRouter([{
  path: '/',
  element: <App />,
  children:[
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/:character',
      element: <Character />,
    }
  ]
}])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
