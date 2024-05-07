import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"
import { useContext, useEffect, useReducer } from "react";
import { getAllData } from "./Service";

import { BASE_URL, BASE_URL_USERS } from "./Service/Api";
import Layout from "./Layout/Layout";
import Users from "./Pages/Users/Users";
import UserEdit from "./Pages/Users/UserEdit";
import PostsUser from "./Pages/Users/PostsUser";
import Admin from "./Pages/Home/Admin";
import Edit from "./Pages/Home/Edit";
import Post from "./Pages/Home/Post";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Detail from "./Pages/Detail/Detail";
import UserDetailo from "./Pages/Users/Detail User/UserDetailo";
import { ProductContext } from "./Context/ProductContext";
import { UserContext } from "./Context/UsersContext";
import AllCards from "./Pages/CardsProduct/AllCards";

export default function App() {
  const { allData, SetAllData, allDataSearch, SetallDataSearch } = useContext(ProductContext);
  const { allUser, SetallUser, allUserSearch, SetallUserSearch } = useContext(UserContext);

  useEffect(() => {
    getAllData(BASE_URL).then((res) => {
      SetAllData(res);
      SetallDataSearch(res);
    });
  }, []);

  useEffect(() => {

    getAllData(BASE_URL_USERS).then((res) => {
      SetallUser(res);
      SetallUserSearch(res);
    });
  }, []); 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin />} />
          <Route path="users" element={<Users />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="edit" element={<Edit />} />
          <Route path="userdetailo" element={<UserDetailo />} />
          <Route path="/:id" element={<Detail />} />
          <Route path="edituser" element={<UserEdit />} />
          <Route path="postuser" element={<PostsUser />} />
          <Route path="allcards" element={<AllCards />} />

          <Route path="post" element={<Post />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
