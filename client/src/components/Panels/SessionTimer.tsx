import React, { useEffect, useState } from "react";
import PanelWrapper from "./PanelWrapper";
import { useAuth } from "../../context/AuthContext";

const SessionTimerPanel = () => {
  const { user } = useAuth();
  const [sessionTime, setSessionTime] = useState<string>("");

  const calculateTimeSinceLastLogin = (lastLogin: number) => {
    const timeDifference = Date.now() - lastLogin;
    const seconds = Math.floor((timeDifference / 1000) % 60);
    const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
    const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  useEffect(() => {
    if (user && user.lastLogin) {
      const interval = setInterval(() => {
        const timeSinceLastLogin = calculateTimeSinceLastLogin(user.lastLogin as number);
        setSessionTime(timeSinceLastLogin);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [user]);

  return (
    <PanelWrapper>
      <div className="rounded-lg border border-white/5 bg-white/5 p-6 h-full">
        <div>
          <p className="text-sm text-white/60">Current session</p>
          <p className="text-2xl font-medium text-white/[87%]">
            {user && user.lastLogin ? sessionTime : "No last login data available"}
          </p>
        </div>
      </div>
    </PanelWrapper>
  );
};

export default SessionTimerPanel;
