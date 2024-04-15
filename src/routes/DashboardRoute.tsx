import { lazy } from "react";
import Loadable from "../components/Loadable";
import DashboardLayout from "../layout/dashboard-layout/DashboardLayout";




const AuthLogin = Loadable(lazy(() => import("../pages/auth/Login")));
const RoleManagement = Loadable(lazy(() => import("../pages/dashboard/RoleManagement/RoleManagement")));
const Home = Loadable(lazy(() => import("../pages/dashboard/Home")));
const Client = Loadable(lazy(() => import("../pages/dashboard/Client/ClientDetails")));

const DashboardRoutes = {
  path: "/",
  element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Home />
      },
      {
        path: "address",
        element: <AuthLogin />,
      },
      {
        path: "members",
        element: <RoleManagement />
      },
      {
        path: "add",
        element: <h1>Aayush</h1> 
      },
      {
        path: "client",
        element: <Client />
      },
    ],
};

export default DashboardRoutes;
