import { MenuItem } from "@headlessui/react";
import React from "react";

const DropdownButton: React.FC<{
  icon: JSX.Element;
  label: string;
  shortcut?: string;
  onClick?: () => void;
}> = ({ icon, label, shortcut, onClick }) => {
  return (
    <MenuItem>
      <button
        className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
        onClick={onClick}
      >
        {icon}
        {label}
        {shortcut && (
          <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">{shortcut}</kbd>
        )}
      </button>
    </MenuItem>
  );
};

export default DropdownButton;
