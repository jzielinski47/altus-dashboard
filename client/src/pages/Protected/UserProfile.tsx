import { PencilIcon } from "@heroicons/react/16/solid";
import HUIButton from "../../components/Buttons/Button";
import PanelWrapper from "../../components/Panels/PanelWrapper";
import { useAuth } from "../../context/AuthContext";
import HUICButton from "../../components/Buttons/HUICButton";

const UserProfile = () => {
  const { user } = useAuth();

  return (
    <div className="relative flex-grow p-4 2xl:p-10 h-full w-full flex justify-center items-center max-w-7xl flex-col gap-8">
      <h2 className="text-2xl font-medium">My account</h2>
      <div className="flex flex-row gap-8 justify-center items-center">
        <div className="flex flex-col gap-4">
          <PanelWrapper>
            <div className="rounded-lg border border-white/5 bg-white/5 p-6 h-full flex flex-row justify-between min-w-[32rem] max-w-[50rem]">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white/60">Username</p>
                <p className="text-base font-medium text-white/[87%]">{user?.username}</p>
              </div>
              <HUICButton onClick={() => null}>
                Edit <PencilIcon className="size-4" />
              </HUICButton>
            </div>
          </PanelWrapper>
          <PanelWrapper>
            <div className="rounded-lg border border-white/5 bg-white/5 p-6 h-full flex flex-row justify-between min-w-[32rem] max-w-[50rem]">
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
            <div className="rounded-lg border border-white/5 bg-white/5 p-6 h-full flex flex-row justify-between min-w-[32rem] max-w-[50rem]">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white/60">Email</p>
                <p className="text-base font-medium text-white/[87%]">{user?.email}</p>
              </div>
            </div>
          </PanelWrapper>
          <PanelWrapper>
            <div className="rounded-lg border border-white/5 bg-white/5 p-6 h-full flex flex-row justify-between min-w-[32rem] max-w-[50rem]">
              <div className="flex flex-col gap-1">
                <p className="text-sm text-white/60">Role</p>
                <p className="text-base font-medium text-white/[87%]">{user?.role}</p>
              </div>
            </div>
          </PanelWrapper>
        </div>
        <div className="h-full flex flex-col gap-4">
          <img src={user?.avatarUrl} alt={user?.username} className="min-w-64 w-full size-full rounded-lg" />
          <p className="text-base/7 text-white/60">Hover over your avatar to change it.</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
