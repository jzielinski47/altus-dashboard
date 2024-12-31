import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
  ChevronDownIcon,
  PencilIcon,
  Square2StackIcon,
  ArrowLeftEndOnRectangleIcon,
  ArchiveBoxXMarkIcon,
  TrashIcon,
  Cog6ToothIcon,
} from "@heroicons/react/16/solid";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { SettingsIcon } from "./Icons/SettingsIcon";
import { useAuth } from "../context/AuthContext";

export const Dropdown: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { logout } = useAuth();

  return (
    <div className="text-right">
      <Menu>
        <MenuButton>{children}</MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="mt-5 z-50 w-52 rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <PencilIcon className="size-4 fill-white/30" />
              Edit profile
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <Cog6ToothIcon className="size-4 fill-white/30" />
              Settings
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘S</kbd>
            </button>
          </MenuItem>
          <div className="my-1 h-px bg-white/5" />
          <MenuItem>
            <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
              <ArchiveBoxXMarkIcon className="size-4 fill-white/30" />
              Archive
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
            </button>
          </MenuItem>
          <MenuItem>
            <button
              className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10"
              onClick={logout}
            >
              <ArrowLeftEndOnRectangleIcon className="size-4 fill-white/30" />
              Log out
              <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};
