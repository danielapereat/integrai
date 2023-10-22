import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'

//Components
import Layout from './Components/Layout'
import Dashboard from './Pages/Dashboard'
import { Provider } from 'react-redux'
import store from './store/store'

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
        element: <h1 className='text-black'>Home</h1>
      },
      {
        path: '/Integrations/:id',
        element: <Dashboard />
      },
      {
        path: ':integration/Methood/:id',
        element: <Dashboard />
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
