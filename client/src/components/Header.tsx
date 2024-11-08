import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="w-full flex flex-row justify-center lg:place-content-between items-center bg-neutral-950 py-8 px-8 sm:px-16">
      <a href="/" className="flex flex-row justify-center items-center gap-3">
        <FontAwesomeIcon icon={faCloud} bounce style={{ color: "#fff" }} />
        <h2 className="font-semibold text-xl">
          {"Altus"}{" "}
          <span style={{ color: "#a78bfa" }} className="black">
            Dashboard
          </span>
        </h2>
      </a>
      <a
        href="/auth"
        className="text-sm font-semibold leading-6 text-neutral-400 hidden lg:block"
      >
        Log in <span aria-hidden="true">&rarr;</span>
        {/* if user's a session id then there should be an avatar or sth that indicates the user logged in */}
      </a>
    </div>
  );
};

export default Header;
