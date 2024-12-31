import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextType, iError, iUser } from "../interfaces";
import { serverIP, serverPort } from "../api/setup";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<iUser | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`${serverIP}:${serverPort}/api/auth/status`, { credentials: "include" });
        const data = await res.json();
        if (res.ok && data.user) setUser(data.user);
      } catch (err: iError | any) {
        console.warn(err.message);
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    fetch(`${serverIP}:${serverPort}/api/auth/logout`, { method: "POST", credentials: "include" })
      .then(() => setUser(null))
      .catch((err) => console.error("Logout error:", err));
  };

  return <AuthContext.Provider value={{ user, setUser, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
