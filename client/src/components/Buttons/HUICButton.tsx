import React, { MouseEventHandler } from "react";
import { Button } from "@headlessui/react";

export interface iHuiButton {
  children: string | React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const HUICButton = ({ children, onClick }: iHuiButton) => {
  return (
    <Button
      onClick={onClick}
      className="inline-flex items-center justify-center min-w-4 gap-2 rounded-lg bg-primary-a30 py-1.5 px-3 max-h-10 text-sm/6 font-semibold text-black font-medium shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-primary-a0 data-[open]:bg-primary-a0 data-[focus]:outline-1 data-[focus]:outline-white  transition duration-700 ease-in-out"
    >
      {children}
    </Button>
  );
};

export default HUICButton;
