import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import Avatar from "@mui/material/Avatar";
import { Dropdown } from "./Dropdown";
import { useState } from "react";

const Header = () => {
  const nav = useNavigate();
  const { user } = useAuth();

  const getAvatarName = (str: string) => {
    return str.charAt(0).toUpperCase() + str.charAt(1).toLowerCase();
  };

  return (
    <div className="relative w-full min-h-14 h-20 flex flex-row place-content-between justify-centers bg-black py-4 px-4 sm:px-8 z-50">
      <span
        className="flex flex-row justify-center items-center gap-3 cursor-pointer px-8"
        onClick={() => nav(user ? "/dashboard" : "/")}
      >
        <FontAwesomeIcon icon={faCloud} bounce className="text-white" />
        <h2 className="text-base font-semibold text-white">
          {"Altus"} <span className="text-primary">Dashboard</span>
        </h2>
      </span>

      {user ? (
        <Dropdown>
          <Avatar className="hover:bg-primary cursor-pointer" alt={user.username} src={user.avatarUrl} />
        </Dropdown>
      ) : (
        <NavButton name="Log in" path={"/auth"} variant={2} />
      )}
    </div>
  );
};

export default Header;
