import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { EllipsisVerticalIcon } from "@heroicons/react/16/solid";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import ArrowButton from "../Buttons/ArrowButton";
import { Dropdown } from "../Dropdown/Dropdown";
import Avatar from "../Avatar";

const Header = () => {
  const nav = useNavigate();
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="text-white/60">Loading...</div>;
  }

  return (
    <header className="relative px-4 sm:px-6">
      <motion.div
        initial={{ width: "80rem" }}
        animate={{ width: user ? "100%" : "80rem" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`mx-auto flex items-center justify-between py-6 px-2`}
      >
        <span
          className="flex flex-row justify-center items-center gap-3 cursor-pointer px-8"
          onClick={() => nav(user ? "/dashboard" : "/")}
        >
          <FontAwesomeIcon
            icon={faCloud}
            bounce
            className="size-6 text-white"
          />
          <h2 className="text-base font-semibold text-white">
            {"Altus"} <span className="text-primary-a0">Dashboard</span>
          </h2>
        </span>

        <div className="flex flex-row gap-3 items-center justify-center">
          {user ? (
            <>
              {user && user.avatarUrl ? (
                <Avatar seed={user.avatarUrl} size={10} variant="rounded" />
              ) : (
                <Avatar seed="Adrian" size={10} />
              )}

              <div className="hidden sm:block flex flex-col gap-0.5">
                <h2 className="text-sm font-semibold">{user.username}</h2>
                <p className="text-sm text-white/60">{user.email}</p>
              </div>
              <Dropdown>
                <EllipsisVerticalIcon className="size-5 text-white/60" />
              </Dropdown>
            </>
          ) : (
            <ArrowButton onClick={() => nav("/auth")}>Log in</ArrowButton>
          )}
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
