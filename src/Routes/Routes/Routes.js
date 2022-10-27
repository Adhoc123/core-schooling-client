import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import RightNav from "../../Pages/Shared/RightNav/RightNav";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <RightNav></RightNav>
        },
        {
            path: "/login",
            element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/terms",
          element: <TermsAndConditions></TermsAndConditions>
        }
      ]
    }
  ]);