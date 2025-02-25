import { createContext, useContext, useEffect, useState } from "react";
import { serverIP } from "../services/setup";
import { AuthContextType, iError, iUser } from "../interfaces";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [isCookiesSet, setIsCookiesSet] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(`${serverIP}/api/auth/status`);

    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const res = await fetch(`${serverIP}/api/auth/status`, { credentials: "include" });
      const data = await res.json();
      if (res.ok && data.user) setUser(data.user);
    } catch (err: iError | any) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    await fetch(`${serverIP}/api/auth/logout`, { method: "POST", credentials: "include" })
      .then(() => setUser(null))
      .catch((err) => console.error("Logout error:", err));
  };

  return (
    <AuthContext.Provider value={{ user, setUser, logout, isCookiesSet, setIsCookiesSet, loading, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
