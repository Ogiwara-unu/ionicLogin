import { createContext, useState, useContext, ReactNode } from "react";
import authService from "../../services/auth.service";

interface AuthContextType {
  user: any;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(authService.getUser());

  const login = async (username: string, password: string) => {
    const success = await authService.login(username, password);
    if (success) setUser(authService.getUser());
    return success;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth debe usarse dentro de AuthProvider");
  return context;
};

export default AuthContext;
