import React from "react";
import ProtectedRoute from "./Routes/ProtectedRoute";
import Dashboard from "../pages/Dashboard";

const DashboardRoute = () => {
  return (
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  );
};

export default DashboardRoute;
