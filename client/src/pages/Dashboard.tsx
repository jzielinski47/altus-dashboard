import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useAuth();
  return (
    <div className="relative flex flex-grow h-full w-full justify-center items-center flex-col">
      <h2 className="mb-4 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl dark:text-white">
        Welcome {user?.username}, to your personal dashboard.
      </h2>
      <p>
        As you're the {user?.role} you're
        {user?.role === "administrator"
          ? " able to do anything you want."
          : " just a peasant. Your priviliges are limited for now."}
      </p>
    </div>
  );
};

export default Dashboard;
