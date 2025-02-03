import { Cog6ToothIcon, ServerStackIcon, UsersIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

const SidePanel = () => {
  const [selectedIcon, setSelectedIcon] = useState(0);

  const icons = [
    { icon: ServerStackIcon, id: 0 },
    { icon: UsersIcon, id: 1 },
    { icon: Cog6ToothIcon, id: 2 },
  ];

  const getIconClass = (id: number) => {
    return `size-6 cursor-pointer transition-colors ${
      selectedIcon === id ? "text-primary-a30" : "text-white/60 hover:text-white/75"
    }`;
  };

  return (
    <div className="hidden sm:flex flex-col items-center justify-between border-e border-white/[38%] gap-4 w-16 h-full p-2">
      {icons.map(({ icon: Icon, id }) => (
        <Icon key={id} className={getIconClass(id)} onClick={() => setSelectedIcon(id)} />
      ))}
    </div>
  );
};

export default SidePanel;
