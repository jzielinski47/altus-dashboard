import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext";
import Button from "../Buttons/HUIButton";
import PanelWrapper from "./PanelWrapper";

const formatTimeDuration = (milliseconds: number) => {
  const seconds = Math.floor(milliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const s = seconds % 60;
  const m = minutes % 60;
  const h = hours % 24;
  const d = days % 30;
  const mo = months % 12;

  if (years > 0) {
    return `${years}y ${mo}mo ${d}d`;
  }
  if (months > 0) {
    return `${months}mo ${d}d ${h}h`;
  }
  if (days > 0) {
    return `${days}d ${h}h ${m}m`;
  }
  if (hours > 0) {
    return `${h}h ${m}m ${s}s`;
  }
  return `${m}m ${s}s`;
};

const SessionTimerPanel = () => {
  const { user } = useAuth();
  const [isTracking, setIsTracking] = useState(true);
  const [sessionDuration, setSessionDuration] = useState("");
  const [breakDuration, setBreakDuration] = useState("");
  const [lastBreakTimestamp, setLastBreakTimestamp] = useState(Date.now());

  const calculateDuration = (startTime: number) => {
    return Date.now() - startTime;
  };

  const handleTrackingToggle = () => {
    if (!isTracking) {
      setLastBreakTimestamp(Date.now());
    }
    setIsTracking(!isTracking);
  };

  useEffect(() => {
    if (user?.lastLogin && isTracking) {
      const timerInterval = setInterval(() => {
        const sessionTime = calculateDuration(user.lastLogin as number);
        const breakTime = calculateDuration(lastBreakTimestamp);

        setSessionDuration(formatTimeDuration(sessionTime));
        setBreakDuration(formatTimeDuration(breakTime));
      }, 1000);

      return () => clearInterval(timerInterval);
    }
  }, [user, isTracking, lastBreakTimestamp]);

  return (
    <PanelWrapper>
      <div className="rounded-lg border border-white/5 bg-white/5 p-6">
        <div className="flex-grow">
          <h2 className="text-lg text-white/[87%] font-bold mb-2">Session Timer</h2>

          <div className="mb-2 flex flex-col gap-2">
            <div className="mb-2">
              <p className="text-base text-white/60">Overall session duration</p>
              <p className="text-2xl font-medium text-white/[87%]">
                {user?.lastLogin ? sessionDuration : "No session data"}
              </p>
            </div>

            <div className="mb-2">
              <p className="text-base text-white/60">Current session</p>
              <p className="text-2xl font-medium text-white/[87%]">
                {user?.lastLogin ? breakDuration : "No break data"}
              </p>
            </div>
          </div>

          <div className="flex justify-between items-end">
            <div>
              <p className="text-base text-white/60">Status: {isTracking ? "Tracking" : "Paused"}</p>
              <p className="text-base text-white/60">Hours: 12:00 AM - 11:59 PM</p>
            </div>
            <Button onClick={handleTrackingToggle}>{isTracking ? "Pause Tracking" : "Resume Tracking"}</Button>
          </div>
        </div>
      </div>
    </PanelWrapper>
  );
};

export default SessionTimerPanel;
