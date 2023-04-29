import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Categoris/Category";
import NewsLeyout from "../Leyout/NewsLeyout";
import News from "../Pages/news/news/news";
import LoginLeyout from "../Leyout/LoginLeyout";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ProtectedRoute from "./ProtectedRoute";
import Terms from "../Pages/Shared/terms/Terms";

const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginLeyout></LoginLeyout>,
    children: [
      {
        path: '/',
        element: <Navigate to='/category/0'></Navigate>
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/terms',
        element: <Terms></Terms>
      }
    ]
  },
  {
    path: "/category",
    element: <Main></Main>,
    children: [

      {
        path: ':id',
        element: <Category></Category>,
        loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
      }
    ]
  },
  {
    path: '/news',
    element: <NewsLeyout></NewsLeyout>,
    children: [
      {
        path: ':id',
        element: <ProtectedRoute><News></News></ProtectedRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
      }
    ]
  }
]);


export default router;