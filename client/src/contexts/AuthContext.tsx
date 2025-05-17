
import { createContext, useContext } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  role: string | null;
};

export const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  role: null
});

export const useAuth = () => useContext(AuthContext);