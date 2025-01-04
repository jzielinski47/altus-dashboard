import { Button } from "@headlessui/react";
import { iHuiButton } from "./Button";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

const ArrowButton = ({ content, onClick }: iHuiButton) => {
  return (
    <Button
      onClick={onClick}
      className="inline-flex items-center gap-2 rounded-lg py-1.5 px-3 text-sm font-semibold text-white/60 focus:outline-none data-[hover]:bg-level-4 data-[focus]:outline-1 data-[focus]:outline-white whitespace-nowrap w-auto transition duration-700 ease-in-out"
    >
      {content}
      <ArrowRightIcon className="w-5 h-5" />
    </Button>
  );
};

export default ArrowButton;
