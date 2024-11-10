import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const nav = useNavigate();

  return (
    <div className="w-full flex flex-row justify-center lg:place-content-between items-center bg-neutral-950 py-8 px-8 sm:px-16 z-50">
      <a
        className="flex flex-row justify-center items-center gap-3 cursor-pointer"
        onClick={() => nav("/")}
      >
        <FontAwesomeIcon icon={faCloud} bounce style={{ color: "#fff" }} />
        <h2 className="font-semibold text-xl">
          {"Altus"}{" "}
          <span style={{ color: "#a78bfa" }} className="black">
            Dashboard
          </span>
        </h2>
      </a>
      <Button name="Log in" path={"/auth"} variant={2} />
      {/* if user's a session id then there should be an avatar or sth that indicates the user logged in */}
    </div>
  );
};

export default Header;
