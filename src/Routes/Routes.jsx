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
            element: <Category></Category>,
            loader: () => fetch('http://localhost:5000/news/')
        },
        {
          path : '/category/:id',
          element: <Category></Category>,
          loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
        }
      ]
    },
    {
      path: '/news',
      element: <NewsLeyout></NewsLeyout>,
      children: [
        {
          path: ':id',
          element: <News></News>,
          loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`) 
        }
      ]
    }
  ]);


export default router ;