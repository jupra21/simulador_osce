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
import { ChatbotProvider } from './context/ChatbotContext';
import Layout from './components/Layout';

// Componente para proteger rutas
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <ExamSimulator />
          </Layout>
        }
      />
      <Route
        path="/login"
        element={
          <Layout>
            <Login />
          </Layout>
        }
      />
      <Route
        path="/planes"
        element={
          <Layout>
            <SubscriptionPlans />
          </Layout>
        }
      />
      <Route
        path="/examen"
        element={
          <ProtectedRoute>
            <Layout>
              <Exam />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>
          <ExamProvider>
            <ChatbotProvider>
              <AppRoutes />
            </ChatbotProvider>
          </ExamProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;