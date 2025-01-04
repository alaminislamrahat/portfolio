import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Skill from "../Pages/Skill/Skill";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children : [
        {
            path : '/',
            element : <Home/>
        },
        {
            path : '/skills',
            element : <Skill/>
        },
      ]
    },
  ]);