import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { SubscriptionPlans } from './SubscriptionPlans';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, loading, checkSubscription } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!checkSubscription()) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Suscripción Requerida
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Para acceder a esta función, necesitas una suscripción activa.
            </p>
          </div>
          <div className="mt-12">
            <SubscriptionPlans />
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}; 