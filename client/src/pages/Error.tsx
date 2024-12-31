import { useNavigate } from "react-router-dom";
import HUIButton from "../components/Button";

const Error = () => {
  const nav = useNavigate();

  return (
    <>
      <div className="flex flex-col h-full px-4 justify-center items-center gap-4">
        <h1 className="uppercase tracking-widest text-text-white-60">404 | Not Found</h1>
        <HUIButton content="Go back home" onClick={() => nav("/")} />
      </div>
    </>
  );
};

export default Error;
