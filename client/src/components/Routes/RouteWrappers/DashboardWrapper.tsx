import Dashboard from "../../../pages/Dashboard";
import ProtectedRoute from "../ProtectedRoute";

const DashboardRoute = () => {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
};

export default DashboardRoute;
