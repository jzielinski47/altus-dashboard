import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import {
  ArrowLeftEndOnRectangleIcon,
  BanknotesIcon,
  Cog6ToothIcon,
  PencilIcon,
  // ArchiveBoxXMarkIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import DropdownButton from "./DropdownButton";

export const Dropdown: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <div className="text-right">
      <Menu>
        <MenuButton>{children}</MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="mt-5 z-50 w-52 rounded-xl border border-white/5 bg-level-5/95 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <DropdownButton
            icon={<PencilIcon className="size-4 fill-white/30" />}
            label="Edit profile"
            shortcut="⌘E"
            onClick={() => nav("/profile")}
          />
          <DropdownButton
            icon={<Cog6ToothIcon className="size-4 fill-white/30" />}
            label="Settings"
            shortcut="⌘S"
            onClick={() => nav("/settings")}
          />
          {user?.role === "administrator" && (
            <DropdownButton
              icon={<UserGroupIcon className="size-4 fill-white/30" />}
              label="Admin panel"
              shortcut="⌘A"
              onClick={() => nav("/admin")}
            />
          )}
          <DropdownButton
            icon={<BanknotesIcon className="size-4 fill-white/30" />}
            label="Assets Tracker"
            shortcut="⌘F"
            onClick={() => nav("/accbalance")}
          />
          <div className="my-1 h-px bg-white/5" />
          {/* <DropdownButton
            icon={<ArchiveBoxXMarkIcon className="size-4 fill-white/30" />}
            label="Archive"
            shortcut="⌘A"
          /> */}

          <DropdownButton
            icon={<ArrowLeftEndOnRectangleIcon className="size-4 fill-white/30" />}
            label="Log out"
            shortcut="⌘D"
            onClick={logout}
          />
        </MenuItems>
      </Menu>
    </div>
  );
};
