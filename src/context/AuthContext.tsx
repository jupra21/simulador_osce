import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  checkSubscription: () => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Aquí iría la lógica para verificar si hay una sesión activa
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      // Aquí iría la llamada a tu API para verificar la sesión
      setIsAuthenticated(!!user);
      setLoading(false);
    } catch (error) {
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    try {
      // Default credentials check
      if (email === 'prueba15@gmail.com' && password === '246810') {
        setLoading(true);
        const mockUser: User = {
          id: '1',
          email,
          name: 'Usuario Ejemplo',
          subscriptionStatus: 'active',
          subscriptionEndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
          examHistory: []
        };
        setUser(mockUser);
        setIsAuthenticated(true);
        setLoading(false);
        return;
      }

      // If not using default credentials, implement your custom authentication logic here
      throw new Error('Credenciales inválidas');
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const logout = async () => {
    try {
      // Aquí iría la lógica de cierre de sesión
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      throw error;
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      // For now, create an account with trial subscription
      setLoading(true);
      const mockUser: User = {
        id: (Math.random() * 1000).toString(),
        email,
        name,
        subscriptionStatus: 'trial',
        subscriptionEndDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        examHistory: []
      };
      setUser(mockUser);
      setIsAuthenticated(true);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw error;
    }
  };

  const checkSubscription = () => {
    if (!user) return false;
    if (user.subscriptionStatus === 'active' && user.subscriptionEndDate) {
      return new Date() < new Date(user.subscriptionEndDate);
    }
    return false;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        isAuthenticated,
        login,
        logout,
        register,
        checkSubscription
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};