import React, { MouseEventHandler, useState } from "react";
import { Button } from "@headlessui/react";
import { MinusCircleIcon } from "@heroicons/react/16/solid";

export interface iHuiButton {
  children: string | React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string | undefined;
  variant?: "primary" | "secondary" | "error" | "success" | "red";
}

const HButton = ({ children, onClick, className, variant = "primary" }: iHuiButton) => {
  const variantClasses = {
    primary: "bg-primary-a30 data-[hover]:bg-primary-a0 data-[open]:bg-primary-a0",
    secondary: "text-white border-2 border-primary-a30 hover:text-black/[87%] hover:bg-primary-a30",
    error: "text-white border-2 border-error data-[hover]:bg-error",
    success: "text-white border-2 border-success data-[hover]:bg-success data-[hover]:text-black",
    red: "text-white border-2 border-error data-[hover]:bg-error",
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <Button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`inline-flex items-center justify-center min-w-4 gap-2 rounded-lg py-1.5 px-3 max-h-10 text-sm/6 font-semibold text-black font-medium shadow-inner shadow-white/10 focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white  transition duration-700 ease-in-out ${
        variantClasses[variant]
      } ${className || ""}`}
    >
      {variant === "error" ? (
        <MinusCircleIcon
          className={`size-4 text-error transition-colors duration-300 ${isHovered ? "text-white" : "text-error"}`}
        />
      ) : null}
      {children}
    </Button>
  );
};

export default HButton;
