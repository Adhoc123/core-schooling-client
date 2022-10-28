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
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Blog from "../../Pages/Shared/Blog/Blog";
import Home from "../../Pages/Shared/Home/Home";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
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
          path: "/blog",
          element: <Blog></Blog>
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
          loader: ({params}) => fetch(`https://core-schooling-server.vercel.app/items/${params.id}`)
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params}) => fetch(`https://core-schooling-server.vercel.app/items/${params.id}`)
        },
        {
          path: '*',
          element: <h1 className="text-center fw-bold"><span className="text-danger">404</span> Page Not Found</h1>
        }

      ]
    }
  ]);