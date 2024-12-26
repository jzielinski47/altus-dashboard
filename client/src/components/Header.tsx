import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const Header = () => {
  const nav = useNavigate();
  const { user } = useAuth();

  const getAvatarName = (str: string) => {
    return str.charAt(0).toUpperCase() + str.charAt(1).toLowerCase();
  };

  return (
    <div className="w-full h-14 flex flex-row place-content-between bg-black py-4 px-4 sm:px-8 z-50">
      <span
        className="flex flex-row justify-center items-center gap-3 cursor-pointer px-8"
        onClick={() => nav(user ? "/dashboard" : "/")}
      >
        <FontAwesomeIcon icon={faCloud} bounce className="text-white" />
        <h2 className="text-base font-semibold text-white">
          {"Altus"} <span className="text-primary">Dashboard</span>
        </h2>
      </span>

      {/* if user's a session id then there should be an avatar or sth that indicates the user logged in */}

      {user ? (
        // user.avatarURL ? :
        <Avatar sx={{ bgcolor: deepOrange[500] }}>{getAvatarName(user.username)}</Avatar>
      ) : (
        <NavButton name="Log in" path={"/auth"} variant={2} />
      )}
    </div>
  );
};

export default Header;
