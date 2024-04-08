import { lazy } from "react";
import Loadable from "../components/Loadable";
import DashboardLayout from "../layout/dashboard-layout/DashboardLayout";


const AuthLogin = Loadable(lazy(() => import("../pages/auth/Login")));

const DashboardRoutes = {
  path: "/dashboard",
  element: <DashboardLayout />,
    children: [
      {
        path: "address",
        element: <AuthLogin />,
      },
      {
        path: "register",
        // element: <AuthRegister />
      },
    ],
};

export default DashboardRoutes;
