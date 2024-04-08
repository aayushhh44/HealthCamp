import DashboardLayout from "../layout/dashboard-layout/DashboardLayout";
import RoleManagement from "../pages/dashboard/RoleManagement/RoleManagement";

// project import
// import Loadable from 'components/Loadable';
// import MinimalLayout from 'layout/MinimalLayout';



// ==============================|| AUTH ROUTING ||============================== //

const RoleRoute = {
  path: "/dashboard/role",
    element: <DashboardLayout />,
  children: [
    {
      path: "/dashboard/role",
      element: <RoleManagement />,
    }
  ]
};

export default RoleRoute;
