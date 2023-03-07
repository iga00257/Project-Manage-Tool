import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './containers/Layout'
import Login from './features/user/Login'
const router = createBrowserRouter([
  {
    path: '/*', // 基本Layout
    element: <Layout />
  },
  {
    path: '/app/*',
    element: <Layout/>
  },
  {
    path: '/login',
    element: <Login/>
  }

])

function App () {
  return (
      <RouterProvider router={router} />
  )
}

export default App
