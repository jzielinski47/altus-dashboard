import { PencilIcon } from "@heroicons/react/16/solid";
import PanelWrapper from "../../components/Panels/PanelWrapper";
import { useAuth } from "../../context/AuthContext";
import HUICButton from "../../components/Buttons/HUICButton";
import { useState } from "react";
import { Input } from "@headlessui/react";
import clsx from "clsx";
import { updateUsername } from "../../api/users";

const UserProfile = () => {
  const { user } = useAuth();

  const [username, setUsername] = useState("");
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);
  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => setUsername(e.target.value);

  const changeUsername = async () => {
    await setIsUsernameEditable(!isUsernameEditable);
    console.log(isUsernameEditable);
    if (user && isUsernameEditable && username.length > 0 && username.length < 32) {
      await updateUsername(user?.username, username);
      location.reload();
    }
  };

  return (
    <div className="relative flex-grow p-4 2xl:p-10 h-full w-full flex justify-center items-center max-w-7xl flex-col gap-8">
      <h2 className="text-2xl font-medium">My account</h2>
      <div className="flex flex-row gap-8 justify-center items-center">
        <div className="flex flex-col gap-4">
          <PanelWrapper>
            <div className="rounded-lg border border-white/5 bg-white/5 p-6 h-full flex flex-row justify-between min-w-[32rem] max-w-[50rem] items-center">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white/60 ">Username</p>

                {isUsernameEditable ? (
                  <Input
                    className={clsx(
                      "block w-full rounded-lg border-none bg-white/5 py-1.5 px-3 text-base text-white/[87%]",
                      "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25"
                    )}
                    name="username"
                    placeholder={user?.username}
                    type="text"
                    onChange={handleUsernameChange}
                  />
                ) : (
                  <p className="py-1.5 px-3 text-base font-medium text-white/[87%]">{user?.username}</p>
                )}
              </div>
              <HUICButton onClick={changeUsername}>
                Edit <PencilIcon className="size-4" />
              </HUICButton>
            </div>
          </PanelWrapper>
          <PanelWrapper>
            <div className="rounded-lg border border-white/5 bg-white/5 p-6 h-full flex flex-row justify-between min-w-[32rem] max-w-[50rem] items-center">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white/60">Password</p>
                <p className="text-base font-medium text-white/[87%]">{user?.password.substring(0, 10)}</p>
              </div>
              <HUICButton onClick={() => null}>
                Edit <PencilIcon className="size-4" />
              </HUICButton>
            </div>
          </PanelWrapper>
          <PanelWrapper>
            <div className="rounded-lg border border-white/5 bg-white/5 p-6 h-full flex flex-row justify-between min-w-[32rem] max-w-[50rem] items-center">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white/60">Email</p>
                <p className="text-base font-medium text-white/[87%]">{user?.email}</p>
              </div>
            </div>
          </PanelWrapper>
          <PanelWrapper>
            <div className="rounded-lg border border-white/5 bg-white/5 p-6 h-full flex flex-row justify-between min-w-[32rem] max-w-[50rem] items-center">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white/60">Role</p>
                <p className="text-base font-medium text-white/[87%]">{user?.role}</p>
              </div>
            </div>
          </PanelWrapper>
        </div>
        <div className="h-full flex flex-col gap-4">
          {user?.avatarUrl ? (
            <img
              src={user?.avatarUrl}
              alt={user?.username}
              className="min-w-64 w-full size-full rounded-lg transition duration-700 ease-in-out hover:opacity-40 cursor-pointer"
            />
          ) : (
            <img
              src={
                "https://api.dicebear.com/9.x/avataaars/svg?seed=Adrian&flip=true&backgroundColor=65c9ff,transparent"
              }
              alt={user?.username}
              className="min-w-64 w-full size-full rounded-lg transition duration-700 ease-in-out hover:opacity-40 cursor-pointer"
            />
          )}

          <p className="text-base/7 text-white/60">Hover over your avatar to change it.</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
