import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

interface AuthGuardProps {
  children: ReactNode;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const { user } = useAuth();

  if (!user) {
    // Si el usuario no está autenticado, redirige a la página de login
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
