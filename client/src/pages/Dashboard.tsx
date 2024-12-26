import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  return <>Welcome {user?.username} to dashboard</>;
};

export default Dashboard;
