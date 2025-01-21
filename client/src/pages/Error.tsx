import { useNavigate } from "react-router-dom";
import HButton from "../components/Buttons/HButton";

const Error = () => {
  const nav = useNavigate();

  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="flex flex-col h-full px-4 justify-center items-center gap-4">
        <h1 className="uppercase tracking-widest text-white/60">404 | Not Found</h1>
        <HButton onClick={() => nav("/")} variant="secondary">
          Go back home
        </HButton>
      </div>
    </div>
  );
};

export default Error;
