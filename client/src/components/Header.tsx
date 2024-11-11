import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <div className="w-full h-14 flex flex-row place-content-between bg-pure-black py-4 px-4 sm:px-8 z-50">
      <span
        className="flex flex-row justify-center items-center gap-3 cursor-pointer px-8"
        onClick={() => nav("/")}
      >
        <FontAwesomeIcon icon={faCloud} bounce className="text-pure-white" />
        <h2 className="text-base font-semibold text-pure-white">
          {"Altus"} <span className="text-primary">Dashboard</span>
        </h2>
      </span>
      <NavButton name="Log in" path={"/auth"} variant={2} />
      {/* if user's a session id then there should be an avatar or sth that indicates the user logged in */}
    </div>
  );
};

export default Header;
