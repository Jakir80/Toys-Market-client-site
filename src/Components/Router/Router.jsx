// 
import { createBrowserRouter } from "react-router-dom";
import AllToys from "../AllToys/AllToys";
import Answer from "../Answer/Answer";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import MyToys from "../My Toys/MyToys";
import UpdateToys from "../My Toys/UpdateToys";
import ProductForm from "../ProductForm/ProductForm";
import Registration from "../Registration/Registration";
import Error from "../Shared/ErrorPage/Error";
import PrivateRout from "../Shared/PrivateRoute/PrivateRout";
import ViewDetails from "../ViewDetails/ViewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: '/blog',
        element: <Answer></Answer>
      },
      {
        path: '/updateToys/:id',
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) => fetch(`https://toys-market-server-site.vercel.app/update/${params.id}`)
      },
      {
        path: '/registration',
        element: <Registration></Registration>
      },

      {
        path: '/addproduct',
        element: <PrivateRout><ProductForm></ProductForm></PrivateRout>
      },
      {
        path: '/mytoys',
        element: <PrivateRout><MyToys></MyToys></PrivateRout>,


      },
      {
        path: '/alltoys',
        element: <AllToys></AllToys>,
      },
      {
        path: '/details/:id',
        element: <PrivateRout><ViewDetails></ViewDetails></PrivateRout>,
        loader: ({ params }) => fetch(`https://toys-market-server-site.vercel.app/viewdetails/${params.id}`)
      }
    ],
  },
]);

export default router;