import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

//Components
import Layout from './Components/Layout'
import Dashboard from './Pages/Dashboard'
import Methoods from './Pages/Methoods'
import { Provider } from 'react-redux'
import store from './store/store'
import Home from './Pages/Home'

const router = createBrowserRouter([
  {
    path: '/LogIn',
    element: <h1 className='text-black'>Log in</h1>
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/integrations/:id',
        element: <Dashboard />
      },
      {
        path: ':integration/methood/:id',
        element: <Methoods />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
  </Provider>
  ,
)
