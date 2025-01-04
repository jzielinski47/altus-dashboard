import React, { MouseEventHandler } from "react";
import { Button } from "@headlessui/react";

export interface iHuiButton {
  content: string | React.ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
}

const HUIButton = ({ content, onClick }: iHuiButton) => {
  return (
    <Button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-lg bg-level-3 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-level-5 data-[open]:bg-level-3 data-[focus]:outline-1 data-[focus]:outline-white  transition duration-700 ease-in-out"
    >
      {content}
    </Button>
  );
};

export default HUIButton;
