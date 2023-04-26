import { createBrowserRouter } from "react-router-dom";
import Main from "../Leyout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Categoris/Category";
import NewsLeyout from "../Leyout/NewsLeyout";
import News from "../Pages/news/news/news";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path : '/category/:id',
          element: <Category></Category>
        }
      ]
    },
    {
      path: '/news',
      element: <NewsLeyout></NewsLeyout>,
      children: [
        {
          path: ':id',
          element: <News></News> 
        }
      ]
    }
  ]);


export default router ;