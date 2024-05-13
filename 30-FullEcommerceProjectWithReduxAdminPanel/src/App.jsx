import ReactDOM from "react-dom/client";
import "./index.css"
import { useContext, useEffect, useReducer } from "react";
import { getAllData } from "./Service";
import { BASE_URL, BASE_URL_USERS } from "./Service/Api";

import { ProductContext } from "./Context/ProductContext";
import { UserContext } from "./Context/UsersContext";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import routes from "./routes/routes";


const router = createBrowserRouter(routes);




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

  return   <RouterProvider router={router} />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
