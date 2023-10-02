// import logo from './logo.svg';
import './App.css';
import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home";
import Home4TakePic from "./Components/Home/Home4/Home4TakePic/Home4TakePic";
// hello BRo
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/takepic",
    element: <Home4TakePic />,
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
