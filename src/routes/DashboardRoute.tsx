import { lazy } from "react";
import Loadable from "../components/Loadable";
import DashboardLayout from "../layout/dashboard-layout/DashboardLayout";
import RoleManagement from "../pages/dashboard/RoleManagement/RoleManagement";
import AssignMember from "../pages/dashboard/RoleManagement/AssignMember";


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
        path: "role",
        element: <RoleManagement />
      },
      {
        path: "assign",
        element: <AssignMember />
      },
    ],
};

export default DashboardRoutes;
