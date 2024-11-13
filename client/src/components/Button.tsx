import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "text";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
}) => {
  const baseClasses =
    "inline-block rounded px-8 py-3 text-sm font-medium transition focus:outline-none focus:ring";

  const variantClasses = {
    primary:
      "bg-indigo-600 text-white hover:scale-110 hover:shadow-xl active:bg-indigo-500",
    secondary:
      "bg-white text-indigo-600 border border-indigo-600 hover:bg-indigo-600 hover:text-white",
    text: "text-indigo-600 hover:text-indigo-500",
  };

  const sizeClasses = {
    sm: "text-sm py-2 px-6",
    md: "text-sm py-3 px-8",
    lg: "text-base py-4 px-10",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${
        sizeClasses[size]
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
