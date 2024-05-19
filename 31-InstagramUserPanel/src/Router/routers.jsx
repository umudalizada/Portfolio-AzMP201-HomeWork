
import Layout from "../Layout/Layout"
import Login from "../pages/Login"
import Home from "../pages/Home"
import Register from "../pages/Register"
import Search from "../pages/Search"
import Profile from "../pages/Profile"

const routers = [
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: '/home',
        element: <Home />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/profile",
        element: <Profile />
      }
    ]
  },

]
export default routers