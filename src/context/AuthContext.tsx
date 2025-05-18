import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types/index';
import api from '../services/api'; // <--- IMPORTAR API

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  hasPremium: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  checkSubscription: () => boolean;
  updateSubscription: (type: 'premium') => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasPremium, setHasPremium] = useState(false);

  // Efecto para cargar el usuario desde localStorage al inicio
  useEffect(() => {
    const checkAuth = () => {
      setLoading(true);
      try {
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
          const parsedUser: User = JSON.parse(savedUser);
          // Opcional: Validar si la sesión/token aún es válido si tuvieras uno
          setUser(parsedUser);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
          setUser(null);
        }
      } catch (error) {
        console.error("Error al cargar usuario desde localStorage:", error);
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('user'); // Limpiar en caso de error
      } finally {
        setLoading(false);
      }
    };
    checkAuth();
  }, []);

  // Efecto para actualizar hasPremium cuando el usuario cambie
  useEffect(() => {
    if (user) {
      setHasPremium(checkSubscription());
    } else {
      setHasPremium(false);
    }
  }, [user]);

  const checkAuth = async () => {
    try {
      const savedUser = localStorage.getItem('user');
      if (savedUser) {
        const parsedUser = JSON.parse(savedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
        setHasPremium(true);
      }
      setLoading(false);
    } catch (error) {
      setIsAuthenticated(false);
      setHasPremium(false);
      setUser(null);
      localStorage.removeItem('user');
      setLoading(false);
    }
  };

  const updateSubscription = async (type: 'premium') => {
    if (!user) throw new Error('Usuario no autenticado');
    
    const updatedUser: User = {
      ...user,
      subscriptionStatus: 'active',
      subscriptionEndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días
    };
    
    setUser(updatedUser);
    setHasPremium(true);
  };

  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await api.post('/users/login', { email, password });
      const { user: loggedInUser, token } = response.data;

      // Asumiendo que el backend devuelve un objeto user compatible con tu tipo User
      // y un token.
      setUser(loggedInUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(loggedInUser));
      localStorage.setItem('token', token); // <--- GUARDAR TOKEN
      
      // Actualizar axios para usar este token en futuras peticiones
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    } catch (error) {
      console.error("Error en login:", error);
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      delete api.defaults.headers.common['Authorization'];
      throw new Error('Credenciales inválidas o error de conexión'); // Mensaje más genérico
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      setIsAuthenticated(false);
      localStorage.removeItem('user');
      localStorage.removeItem('token'); // <--- ELIMINAR TOKEN
      delete api.defaults.headers.common['Authorization']; // <--- ELIMINAR HEADER DE AXIOS
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
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
      localStorage.setItem('user', JSON.stringify(mockUser)); // Guardar en localStorage
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

  const value = {
    user,
    loading,
    isAuthenticated,
    hasPremium,
    login,
    logout,
    register,
    checkSubscription,
    updateSubscription
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};