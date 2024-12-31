import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Avatar from "@mui/material/Avatar";
import { Dropdown } from "../components/Dropdown";
import ArrowButton from "../components/Buttons/ArrowButton";

const Header = () => {
  const nav = useNavigate();
  const { user } = useAuth();

  const getAvatarName = (str: string) => {
    return str.charAt(0).toUpperCase() + str.charAt(1).toLowerCase();
  };

  return (
    <header className="relative px-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between py-6 px-2">
        <span
          className="flex flex-row justify-center items-center gap-3 cursor-pointer px-8"
          onClick={() => nav(user ? "/dashboard" : "/")}
        >
          <FontAwesomeIcon icon={faCloud} bounce className="size-6 text-white" />
          <h2 className="text-base font-semibold text-white">
            {"Altus"} <span className="text-primary">Dashboard</span>
          </h2>
        </span>

        {user ? (
          <Dropdown>
            <Avatar className="hover:bg-primary cursor-pointer" alt={user.username} src={user.avatarUrl} />
          </Dropdown>
        ) : (
          <ArrowButton content="Log in" onClick={() => nav("/auth")} />
        )}
      </div>
    </header>
  );
};

export default Header;
