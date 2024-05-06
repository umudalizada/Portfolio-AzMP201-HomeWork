import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"
import { useEffect, useReducer } from "react";
import reducer from "./Reducer/Reducer";
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






export default function App() {

  const [state,dispatch]=useReducer(
    reducer,
    {
      allData:[],
      allDataSearch:[],
      allUser:[],
      allUserSearch:[]
    }
  )

useEffect(()=>{


  getAllData(BASE_URL).then((res)=>{
    dispatch({
      type:"SetData",
      allData:res
    }),
    dispatch({
      type:"SetDataSearch",
      allDataSearch:res
    })
    
  })


  getAllData(BASE_URL_USERS).then((res)=>{
    dispatch({
      type:"SetUser",
      allUser:res
    }),
    dispatch({
      type:"SetUserSearch",
      allUserSearch:res
    })

  })
},[])



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin state={state} dispatch={dispatch}/>} />
          <Route path="users" element={<Users state={state} dispatch={dispatch} />} />
          <Route path="dashboard" element={<Dashboard state={state} dispatch={dispatch} />} />
          <Route path="login" element={<Login state={state} dispatch={dispatch} />} />
          <Route path="register" element={<Register state={state} dispatch={dispatch} />} />
          <Route path="edit" element={<Edit state={state} dispatch={dispatch} />} />
          <Route path="edituser" element={<UserEdit state={state} dispatch={dispatch} />} />
          <Route path="postuser" element={<PostsUser state={state} dispatch={dispatch} />} />
          <Route path="post" element={<Post state={state} dispatch={dispatch} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);