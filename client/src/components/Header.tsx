import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import NavButton from "./NavButton";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <div className="w-full flex flex-row lg:place-content-between items-center bg-pure_black py-8 px-8 sm:px-16 z-50">
      <span
        className="flex flex-row justify-center items-center gap-3 cursor-pointer"
        onClick={() => nav("/")}
      >
        <FontAwesomeIcon icon={faCloud} bounce className="text-text-white-87" />
        <h2 className="text-xl font-semibold text-white-87">
          {"Altus"} <span className="text-primary">Dashboard</span>
        </h2>
      </span>
      <NavButton name="Log in" path={"/auth"} variant={2} />
      {/* if user's a session id then there should be an avatar or sth that indicates the user logged in */}
    </div>
  );
};

export default Header;
