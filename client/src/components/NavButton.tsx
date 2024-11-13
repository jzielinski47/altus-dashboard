import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Arrow from "./icons/Arrow";
import { buttonStyles } from "./buttonStyles";

interface NavButtonProps {
  name: string;
  path: string;
  variant?: 1 | 2;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({
  name,
  path,
  variant = 1,
  className = "",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  const variantClasses = `${buttonStyles["base"]} ${buttonStyles[variant]}`;

  return (
    <motion.button
      className={`${variantClasses} ${className}`}
      onClick={handleClick}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {name}
      {variant === 2 && <Arrow />}
    </motion.button>
  );
};

export default NavButton;
