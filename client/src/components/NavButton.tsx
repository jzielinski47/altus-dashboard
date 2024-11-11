import { useNavigate } from "react-router-dom";
import Arrow from "./Arrow";
import { motion } from "framer-motion";

type NavButtonProps = {
  name: string;
  path: string;
  variant: 1 | 2 | 3 | 4;
};

const base: string = "inline-flex items-center gap-1 px-8 py-2 rounded-full";

const variants = {
  1: "bg-primary/[0.38] border-2 border-primary_dark hover:bg-primary_dark_hov text-text-white-60 font-bold ",
  2: "text-base font-medium transition-all focus:outline-none text-text-white-60 hover:text-primary",
  3: "bg-primary_dark hover:bg-primary_dark_hov text-pure-white/[0.87]",
  4: "bg-gradient-to-r from-primary to-secondary text-pure-black/[0.87]",
} as const;

const NavButton = ({ name, path, variant }: NavButtonProps) => {
  const nav = useNavigate();

  return (
    <motion.button
      className={`${base} ${variants[variant]}`}
      onClick={() => nav(path)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {name}
      {variant == 2 ? <Arrow /> : null}
    </motion.button>
  );
};

export default NavButton;
