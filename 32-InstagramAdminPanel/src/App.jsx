
import './App.css'
import { routers } from './Router/routers';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(routers);


function App() {

  return <RouterProvider router={router} />
}

export default App
