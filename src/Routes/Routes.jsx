import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Skill from "../Pages/Skill/Skill";
import Project from "../Pages/Project/Project";
import Contact from "../Pages/Contacts/Contact";


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
        {
            path : '/projects',
            element : <Project/>
        },
        {
            path : '/contact',
            element : <Contact/>
        },
      ]
    },
  ]);