import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      Welcome {user?.username}, to your personal dashboard. As you're {user?.role} you're the
      {user?.role === "administrator"
        ? "able to do anything you want."
        : "just a peasant. Your priviliges are limited for now."}
    </div>
  );
};

export default Dashboard;
