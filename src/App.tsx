import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { ChatbotProvider } from './context/ChatbotContext';
import { ExamProvider } from './context/ExamContext';
import Layout from './components/Layout';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy loading de componentes
const HomePage = lazy(() => import('./pages/HomePage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const SubscriptionPlans = lazy(() => import('./components/SubscriptionPlans'));
const PaymentPage = lazy(() => import('./pages/PaymentPage'));
const DashboardPage = lazy(() => import('./pages/DashboardPage'));
const ExamPage = lazy(() => import('./pages/ExamPage'));
const ResultsPage = lazy(() => import('./pages/ResultsPage'));
const AdminPage = lazy(() => import('./pages/AdminPage')); // <--- IMPORTAR AdminPage
const ReviewPage = lazy(() => import('./pages/ReviewPage')); // <--- IMPORTAR ReviewPage

// Componente para proteger rutas que requieren autenticación
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

// Componente para proteger rutas que requieren suscripción
const SubscriptionRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, hasPremium } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  if (!hasPremium) {
    return <Navigate to="/planes" />;
  }
  
  return <>{children}</>;
};

// Componente para proteger rutas de administrador
const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, user, loading } = useAuth(); // <--- AÑADIR loading
  
  if (loading) {
    return <LoadingSpinner />; // O algún otro indicador de carga
  }
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  // Después de que loading es false, user debería estar correctamente cargado desde localStorage
  if (user?.role !== 'admin') {
    console.log('AdminRoute: User no es admin o user es null/undefined', user); // Para depuración
    return <Navigate to="/simulador" />; // O a una página de "Acceso Denegado"
  }
  
  return <>{children}</>;
};

const AppRoutes: React.FC = () => {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/planes" element={<SubscriptionPlans />} />
        <Route path="/payment" element={<Layout><PaymentPage /></Layout>} />
        <Route path="/login" element={<LoginPage />} />
        
        {/* Rutas protegidas */}
        <Route
          path="/simulador"
          element={
            <ProtectedRoute>
              <Layout>
                <DashboardPage />
              </Layout>
            </ProtectedRoute>
          }
        />

        <Route
          path="/simulador/exam/:id"
          element={
            <SubscriptionRoute>
              <Layout>
                <ExamPage />
              </Layout>
            </SubscriptionRoute>
          }
        />

        <Route
          path="/simulador/results"
          element={
            <SubscriptionRoute>
              <Layout>
                <ResultsPage />
              </Layout>
            </SubscriptionRoute>
          }
        />

        {/* Ruta para Revisión de Examen */}
        <Route
          path="/review"
          element={
            <SubscriptionRoute>
              <Layout>
                <ReviewPage />
              </Layout>
            </SubscriptionRoute>
          }
        />

        {/* Ruta de Administración */}
        <Route 
          path="/admin"
          element={ 
            <AdminRoute>
              <Layout>
                <AdminPage />
              </Layout>
            </AdminRoute>
          }
        />
      </Routes>
    </Suspense>
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