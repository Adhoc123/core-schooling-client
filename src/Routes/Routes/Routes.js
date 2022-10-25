import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Main from "../../layout/Main";
import RightNav from "../../Pages/Shared/RightNav/RightNav";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <RightNav></RightNav>
        }
      ]
    }
  ]);