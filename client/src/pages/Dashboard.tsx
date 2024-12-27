import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="relative flex h-full w-full">
      <h2 className="mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
        Welcome {user?.username}, to your personal dashboard. As you're the {user?.role} you're
        {user?.role === "administrator"
          ? " able to do anything you want."
          : " just a peasant. Your priviliges are limited for now."}
      </h2>
    </div>
  );
};

export default Dashboard;
