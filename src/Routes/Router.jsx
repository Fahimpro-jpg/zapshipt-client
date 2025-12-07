import { createBrowserRouter } from "react-router";
import RootLayOut from "../LayOuts/RootLayOut";
import Home from "../Pages/HomePage/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../LayOuts/AuthLayout";
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../Pages/Rider/Rider";
import AboutUs from "../Pages/AboutUs/AboutUs";

import SendParcel from "../Pages/SendParcel/SendParcel";
import DashBoardLayout from "../LayOuts/DashBoardLayout";
import MyParcels from "../Pages/DashBoard/MyParcels/MyParcels";
import Payment from "../Pages/DashBoard/Payment/Payment";
import PaymentSuccess from "../Pages/DashBoard/Payment/PaymentSuccess";
import PaymentCanceled from "../Pages/DashBoard/Payment/PaymentCanceled";
import PaymentHistory from "../Pages/DashBoard/PaymentHistory/PaymentHistory";
import ApproveRider from "../Pages/DashBoard/ApproveRider/ApproveRider";
import UsersManagement from "../Pages/DashBoard/UsersManagement/UsersManagement";
import AdminRoute from "./AdminRoute";

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
          path: '/rider',
          element: <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>,
          loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
        },
        {
          path:'/coverage',
          element:<Coverage></Coverage>,
          loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
        },
        {
          path:'/aboutUs',
          element:<AboutUs></AboutUs>
        },
        {
          path:'/send-parcel',
          element:<PrivateRoute>
            <SendParcel></SendParcel></PrivateRoute>,
            loader:()=>fetch('/serviceCenters.json').then(res=>res.json())
        }
        
    ]
  },
  {
    path:'/',
    Component:AuthLayout,
    children:[
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>

      }
    ]
  },
  {
    path:'/dashboard',
    element: <PrivateRoute>
      <DashBoardLayout></DashBoardLayout>
    </PrivateRoute>,
    children:[
      {
        path:'my-parcels',
        element:<MyParcels></MyParcels>
      },
      {
        path:'payment/:parcelId',
        element:<Payment></Payment>
      },
      {
        path:'payment-history',
        element:<PaymentHistory></PaymentHistory>
      },
      {
        path:'payment-success',
        element: <PaymentSuccess></PaymentSuccess>
      },
      {
        path:'payment-cancelled',
        element: <PaymentCanceled></PaymentCanceled>
      },
      {
        path:'approve-riders',
        element:<AdminRoute>
          <ApproveRider></ApproveRider>
        </AdminRoute>
      },
      {
        path:'users-management',
        element:<AdminRoute>
          <UsersManagement></UsersManagement>
        </AdminRoute>
      }
    ]
  }
]);