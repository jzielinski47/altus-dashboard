import { Input } from "@headlessui/react";
import { ArrowPathRoundedSquareIcon, ArrowUpRightIcon, PencilIcon, XMarkIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { deleteSelf, updateAvatar, updateUsername } from "../../api/users";
import HButton from "../../components/Buttons/HButton";
import PanelWrapper from "../../components/Panels/PanelWrapper";
import { useAuth } from "../../context/AuthContext";
import Avatar from "../../components/Avatar";

const seeds: string[] = [
  "Sophia",
  "Desitny",
  "Sadie",
  "Ryker",
  "Jessica",
  "Mason",
  "Sarah",
  "Kimberly",
  "Adrian",
  "Wyatt",
  "Oliver",
  "Nolan",
  "Jameson",
  "Riley",
  "George",
  "Sara",
  "Jude",
  "Aidan",
  "Leo",
  "Avery",
  "Eden",
  "Luis",
  "Robert",
];

const UserProfile = () => {
  const { user, fetchUser } = useAuth();

  const [username, setUsername] = useState("");
  const [isUsernameEditable, setIsUsernameEditable] = useState(false);
  const [isAvatarSelectorToggled, setIsAvatarSelectorToggled] = useState(false);
  const [isDelAccConfirmationToggled, setIsDelAccConfirmationToggled] = useState(false);
  const [selectedSeed, setSelectedSeed] = useState("");
  const passwordPalceholder = Array(10).fill("*");
  const constraintsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateUser = async () => await fetchUser();
    updateUser();
  }, [selectedSeed, username]);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>): void => setUsername(e.target.value);

  const changeUsername = async () => {
    await setIsUsernameEditable(!isUsernameEditable);
    console.log(isUsernameEditable);
    if (user && isUsernameEditable && username.length > 0 && username.length < 32) {
      await updateUsername(user?.username, username);
      await setUsername(user.username);
    }
  };

  const changeAvatar = async (seed: string) => {
    if (user) {
      await updateAvatar(user.username, seed);
      await setSelectedSeed(seed);
      await setIsAvatarSelectorToggled(false);
    }
  };

  const deleteAccount = async () => {
    console.log("delete account placeholder");
    if (user) {
      await deleteSelf();
      location.reload();
    }
  };

  useEffect(() => {
    console.log("on load", user?.avatarUrl);
  }, []);

  useEffect(() => {
    console.log("on change", user?.avatarUrl);
  }, [user]);

  return (
    <div
      className="relative flex-grow p-4 2xl:p-10 h-full w-full flex justify-center items-center max-w-7xl flex-col gap-8"
      ref={constraintsRef}
    >
      {isAvatarSelectorToggled ? (
        <motion.div className="flex-grow z-10 fixed inset-0 w-screen overflow-y-auto flex flex-col items-center justify-start bg-black/60">
          <h3 className="text-2xl text-white/[87%] font-bold fixed top-5">Choose your avatar</h3>
          <div className="flex-grow pt-24 pb-8 px-32 flex flex-row flex-wrap gap-8 justify-center ">
            {seeds.map((seed) => (
              <div key={seed + "-d"} className="flex flex-col gap-2">
                <Avatar key={seed} seed={seed} onClick={() => changeAvatar(seed)} className="size-64" />

                <p key={seed + "-1"} className="text-base text-white/60 hidden 2xl:block">
                  {" "}
                  {seed}{" "}
                </p>
              </div>
            ))}
          </div>
          <p className="m-4 text-sm text-white/60">
            All avatars design style is licensed under{" "}
            <a href="https://creativecommons.org/publicdomain/zero/1.0/" className="underline inline-flex gap-1">
              CC0 1.0 <ArrowUpRightIcon className="size-4" />
            </a>
            This avatar style is a remix of: Lorelei by Lisa Wischofsky provided by DiceBear API.
          </p>
          <div className="mb-24">
            <HButton onClick={() => setIsAvatarSelectorToggled(false)} variant="secondary">
              Go back <XMarkIcon className="size-4" />
            </HButton>
          </div>
        </motion.div>
      ) : null}

      {isDelAccConfirmationToggled ? (
        <motion.div className="flex-grow z-10 fixed inset-0 w-screen overflow-y-auto flex flex-col items-center justify-center bg-black/60">
          <motion.div
            className="bg-black/[87%] px-8 py-4 rounded-lg flex flex-col gap-4 justify-center items-center"
            drag
            dragElastic={0.5}
            dragConstraints={constraintsRef}
          >
            <div className="flex flex-col gap-2 justify-center items-center">
              <h2 className="font-bold text-lg text-white/[87%]">Are you sure you want to delete your account?</h2>
              <p className="text-sm text-white/60">
                This action is <span className="text-error">permanent</span>, and you can't undo it.
              </p>
            </div>
            <div className="flex flex-row gap-4">
              <HButton onClick={() => deleteAccount()} variant="error">
                Delete
              </HButton>

              <HButton onClick={() => setIsDelAccConfirmationToggled(false)} variant="success">
                Restore <ArrowPathRoundedSquareIcon className="size-4" />
              </HButton>
            </div>
          </motion.div>
        </motion.div>
      ) : null}

      <h2 className="text-2xl font-medium">My account</h2>
      <div className="flex flex-col-reverse lg:flex-row gap-8 justify-center items-center">
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
              <HButton onClick={changeUsername} variant="secondary">
                <PencilIcon className="size-4" /> Edit
              </HButton>
            </div>
          </PanelWrapper>
          <PanelWrapper>
            <div className="rounded-lg border border-white/5 bg-white/5 p-6 h-full flex flex-row justify-between min-w-[32rem] max-w-[50rem] items-center">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white/60">Password</p>
                <p className="text-base font-medium text-white/[87%]">{passwordPalceholder}</p>
              </div>
              <HButton variant="secondary">
                <PencilIcon className="size-4" /> Edit
              </HButton>
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
          <div className="flex-grow" onClick={() => setIsAvatarSelectorToggled(!isAvatarSelectorToggled)}>
            {user && user?.avatarUrl ? (
              <Avatar seed={user.avatarUrl} className="size-128" />
            ) : (
              <img
                src={
                  "https://api.dicebear.com/9.x/avataaars/svg?seed=Adrian&flip=true&backgroundColor=65c9ff,transparent"
                }
                alt={user?.username}
                className="min-w-64 w-full size-full rounded-lg transition duration-700 ease-in-out hover:opacity-40 cursor-pointer"
              />
            )}
          </div>

          <p className="text-base/7 text-white/60">Hover over your avatar to change it.</p>

          <HButton variant="error" onClick={() => setIsDelAccConfirmationToggled(true)}>
            Delete account
          </HButton>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
