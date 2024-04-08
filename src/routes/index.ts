import { useRoutes } from 'react-router-dom';
import LoginRoutes from './LoginRoute';
import DashboardRoutes from './DashboardRoute';

export default function SystemRoutes() {
    return useRoutes([LoginRoutes, DashboardRoutes]);
}