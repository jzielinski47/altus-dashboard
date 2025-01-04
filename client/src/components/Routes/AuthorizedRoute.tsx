import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const AuthorizedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user } = useAuth();

  if (!user || user.role !== "administrator") return <Navigate to="/auth" replace />;

  return children;
};

export default AuthorizedRoute;
