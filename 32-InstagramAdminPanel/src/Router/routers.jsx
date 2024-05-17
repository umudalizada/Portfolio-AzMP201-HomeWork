import AddUser from "../pages/AddUser";
import Detail from "../pages/Detail";
import UsersPanel from "../pages/UsersPanel";

export const routers=[
    {
        path:"/",
        element:<UsersPanel/>
    },
    {
        path:"/adduser/:id",
        element:<AddUser/>
    }
    ,
    {
        path:"/detail/:id",
        element:<Detail/>
    }
]