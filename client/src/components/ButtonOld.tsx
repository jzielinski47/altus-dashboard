import React, { ReactNode } from "react";
import { buttonStyles } from "./buttonStyles";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 1 | 2;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const ButtonOld: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = 1,
  size = "md",
  disabled = false,
}) => {
  const sizeClasses = {
    sm: "text-sm py-2 px-6",
    md: "text-sm py-3 px-8",
    lg: "text-base py-4 px-10",
  };

  return (
    <button
      className={`${buttonStyles["base"]} ${buttonStyles[variant]} ${sizeClasses[size]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonOld;
