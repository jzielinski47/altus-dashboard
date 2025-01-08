import { useEffect, useState } from "react";
import PanelWrapper from "./PanelWrapper";
import { useAuth } from "../../context/AuthContext";
import HUIButton from "../Buttons/Button";

const SessionTimerPanel = () => {
  const { user } = useAuth();
  const [sessionTime, setSessionTime] = useState<string>("");
  // const [lastBreak, setLastBreak] = useState("");

  const [isTrackingAllowed, setIsTrackingAllowed] = useState(true);

  const calculateTimeSinceLastLogin = (lastLogin: number) => {
    const timeDifference = Date.now() - lastLogin;
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    if (user && user.lastLogin && isTrackingAllowed) {
      const interval = setInterval(() => {
        const timeSinceLastLogin = calculateTimeSinceLastLogin(user.lastLogin as number);
        setSessionTime(timeSinceLastLogin);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [user, isTrackingAllowed]);

  return (
    <PanelWrapper>
      <div className="rounded-lg border border-white/5 bg-white/5 p-6">
        <div className="flex-grow">
          <h2 className="text-lg text-white/[87%] font-bold mb-2">Current session time</h2>
          <div className="mb-2 flex-grow flex flex-col sm:flex-row justify-between gap-4">
            <div className="mb-2 flex flex-col">
              <p className="text-base text-white/60">Current session time</p>
              <p className="text-2xl font-medium text-white/[87%]">
                {user && user.lastLogin ? sessionTime : "No last login data available"}
              </p>
            </div>
            <div className="mb-2 flex flex-col">
              <p className="text-base text-white/60">Time since last break</p>
              <p className="text-2xl font-medium text-white/[87%]">
                {user && user.lastLogin ? sessionTime : "No last login data available"}
              </p>
            </div>
          </div>

          <div className="flex flex-row">
            <div className="flex-grow">
              <p className="text-base text-white/60">Tracking: {isTrackingAllowed ? "On" : "Off"}</p>
              <p className="text-base text-white/60">Tracking hours: 12:00 AM - 11:59 PM</p>
            </div>
            <div className="flex-grow flex justify-end items-end">
              <HUIButton onClick={() => setIsTrackingAllowed(!isTrackingAllowed)}>
                {(isTrackingAllowed ? "Disable" : "Enable") + " tracking"}
              </HUIButton>
            </div>
          </div>
        </div>
      </div>
    </PanelWrapper>
  );
};

export default SessionTimerPanel;
