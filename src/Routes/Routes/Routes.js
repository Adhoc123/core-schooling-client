import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Outlet,
  } from "react-router-dom";
import Main from "../../layout/Main";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import TermsAndConditions from "../../Pages/Others/TermsAndConditions/TermsAndConditions";
import RightNav from "../../Pages/Shared/RightNav/RightNav";
import Content from "../../Pages/Shared/Content/Content";
import Contents from "../../Pages/Shared/Contents/Contents";
import Topic from "../../Pages/Shared/Topic/Topic";
import Checkout from "../../Pages/Shared/Checkout/Checkout";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
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
        },
        {
          path: "/contents",
          element: <Contents></Contents>
        },
        {
          path: "/items/:id",
          element: <Topic></Topic>,
          loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
        },
        {
          path: "/checkout/:id",
          element: <Checkout></Checkout>,
          loader: ({params}) => fetch(`http://localhost:5000/items/${params.id}`)
        }

      ]
    }
  ]);