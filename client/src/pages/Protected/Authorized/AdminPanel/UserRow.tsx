import HButton from "../../../../components/Buttons/HButton";
import { iUser } from "../../../../interfaces";
import { HandRaisedIcon, UserPlusIcon } from "@heroicons/react/16/solid";
import Avatar from "../../../../components/Avatar";

const UserRow = ({ user }: { user: iUser }) => {
  const convertDateFormat = (date: number): string => {
    const temp = new Date(date);
    return temp.toDateString();
  };

  const className = "whitespace-nowrap px-4 py-2 font-medium";

  return (
    <tr className="hover:bg-level-1 hover:cursor-pointer text-white/60 hover:text-white/[87%]">
      <Avatar seed={user.avatarUrl as string} className="size-10 m-4 ml-10" variant="rounded" />
      <td className={className}>{user.username}</td>
      <td className={className}>{user.email}</td>
      <td className={className}>{user.role}</td>
      <td className={className}>{convertDateFormat(user.creationDate as number)}</td>
      <td className={className}>{convertDateFormat(user.lastLogin as number)}</td>
      <td className={className}>
        <span className={user.disabled ? "text-error" : "text-success"}>{user.disabled ? "Disabled" : "Active"}</span>
      </td>
      <td className={className}>
        <HButton variant="secondary">
          <UserPlusIcon className="size-4" /> Upgrade
        </HButton>
      </td>
      <td className={className}>
        <HButton variant="red">
          <HandRaisedIcon className="size-4" /> Disable
        </HButton>
      </td>
      <td className={className}>
        <HButton variant="error">Delete</HButton>
      </td>
    </tr>
  );
};

export default UserRow;
