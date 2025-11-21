import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOuts/RootLayOut";
import Home from "../Pages/HomePage/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayOut></RootLayOut>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
          path:'/coverage',
          element:<Coverage></Coverage>,
          loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
        }
    ]
  },
]);