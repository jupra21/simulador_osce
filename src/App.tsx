import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ExamSimulator } from './components/ExamSimulator';
import { SubscriptionPlans } from './components/SubscriptionPlans';
import { Login } from './components/Login';
import { Navbar } from './components/Navbar';
import { Exam } from './components/Exam';
import { ExamProvider } from './context/ExamContext';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';

// Componente para proteger rutas
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

// Layout principal que incluye el Navbar
const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="py-6">
        {children}
      </main>
    </div>
  );
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <ExamSimulator />
          </MainLayout>
        }
      />
      <Route
        path="/login"
        element={
          <MainLayout>
            <Login />
          </MainLayout>
        }
      />
      <Route
        path="/planes"
        element={
          <MainLayout>
            <SubscriptionPlans />
          </MainLayout>
        }
      />
      <Route
        path="/examen"
        element={
          <ProtectedRoute>
            <MainLayout>
              <Exam />
            </MainLayout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <ExamProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ExamProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;