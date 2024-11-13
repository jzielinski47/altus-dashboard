import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Arrow from "./icons/Arrow";

interface NavButtonProps {
  name: string;
  path: string;
  type?: 1 | 2;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  name,
  path,
  type = 1,
  className = "",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  const variantClasses = `inline-flex items-center gap-1 transition duration-500 ease-in-out px-8 py-2 rounded-full ${
    type === 1
      ? "bg-primary/[0.38] border-2 border-primary hover:bg-primary hover:text-black text-text-white-60"
      : "text-base font-medium transition-all focus:outline-none text-text-white-60 hover:text-primary"
  }`;

  return (
    <motion.button
      className={`${variantClasses} ${className}`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {name}
      {type === 2 && <Arrow />}
    </motion.button>
  );
};

export default NavButton;
