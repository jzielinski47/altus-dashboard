import { useNavigate } from "react-router-dom";
import Arrow from "./Arrow";

type NavButtonProps = {
  name: string;
  path: string;
  variant: 1 | 2 | 3;
};

const base: string = "inline-flex items-center gap-1 px-8 py-2 rounded-full";

const variants = {
  1: "bg-primary/[0.38] border-2 border-primary_dark hover:bg-primary_dark_hov text-text-white-60 font-bold ",
  2: "text-base font-medium transition-all focus:outline-none text-text-white-60 hover:text-primary",
  3: "bg-primary_dark text-text-white-87 font-bold hover:bg-primary_dark_hov",
} as const;

const NavButton = ({ name, path, variant }: NavButtonProps) => {
  const nav = useNavigate();

  return (
    <button
      className={`${base} ${variants[variant]}`}
      onClick={() => nav(path)}
    >
      {name}
      {variant == 2 ? <Arrow /> : null}
    </button>
  );
};

export default NavButton;
