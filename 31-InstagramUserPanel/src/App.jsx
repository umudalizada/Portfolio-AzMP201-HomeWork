import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routers from "./Router/routers.jsx";

const router = createBrowserRouter(routers);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
