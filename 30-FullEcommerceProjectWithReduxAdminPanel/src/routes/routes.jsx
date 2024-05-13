import AdminLayout from "../Layout/AdminLayout"
import Layout from "../Layout/Layout"
import AllCards from "../Pages/CardsProduct/AllCards"
import Dashboard from "../Pages/Dashboard/Dashboard"
import Detail from "../Pages/Detail/Detail"
import Admin from "../Pages/Home/Admin"
import Basket from "../Pages/Home/Basket"
import Edit from "../Pages/Home/Edit"
import Post from "../Pages/Home/Post"
import Wishlist from "../Pages/Home/Wishlist"
import Login from "../Pages/Login/Login"
import Register from "../Pages/Register/Register"
import UserDetailo from "../Pages/Users/Detail User/UserDetailo"
import PostsUser from "../Pages/Users/PostsUser"
import UserEdit from "../Pages/Users/UserEdit"
import Users from "../Pages/Users/Users"

const routes = [
    {
        path: "/",
        element: <Login />
    },


    {
        path: "/register",
        element: <Register />
    }
    ,
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/products",
                element: <AllCards />
            }
            ,
            {
                path: "/basket",
                element: <Basket />
            }
            ,
            {
                path: "/wishlist",
                element: <Wishlist />
            }
            ,
            {
                path: "products/detail/:id",
                element: <Detail />
            },

        ]
    }
    , {
        path: "/",
        element: <AdminLayout />,
        children: [
            {
                path: "/Admin",
                element: <Admin />
            },
            , {
                path: "/dashboard",
                element: <Dashboard />
            },

            {
                path: "/edit",
                element: <Edit />
            }
            ,
            {
                path: "/users/detail/:id",
                element: <UserDetailo />
            }
            ,
            {
                path: "Admin/detail/:id",
                element: <Detail />
            }
            ,
            {
                path: "users",
                element: <Users />
            }
            ,
            {
                path: "/edituser",
                element: <UserEdit />
            }
            ,

            {
                path: "post",
                element: <Post />
            }
            ,
            {
                path: "postuser",
                element: <PostsUser />
            }
        ]
    }

]

export default routes