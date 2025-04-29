import React from 'react';
import { Check, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const SubscriptionPlans: React.FC = () => {
  const navigate = useNavigate();

  const plans = [
    {
      name: 'Plan Básico',
      price: 'S/ 49.90',
      period: 'mes',
      features: [
        'Acceso a 1 simulacro',
        'Análisis básico de resultados',
        'Soporte por email',
        'Actualizaciones mensuales'
      ],
      popular: false
    },
    {
      name: 'Plan Premium',
      price: 'S/ 99.90',
      period: 'mes',
      features: [
        'Acceso ilimitado a simulacros',
        'Análisis detallado con IA',
        'Soporte prioritario 24/7',
        'Actualizaciones semanales',
        'Material de estudio exclusivo',
        'Certificado de preparación'
      ],
      popular: true
    },
    {
      name: 'Plan Anual',
      price: 'S/ 899.90',
      period: 'año',
      features: [
        'Todo lo del plan Premium',
        'Ahorro del 25%',
        'Acceso a webinars exclusivos',
        'Mentoría personalizada',
        'Garantía de devolución'
      ],
      popular: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Planes de Suscripción
        </h2>
        <p className="mt-4 text-xl text-gray-600">
          Elige el plan que mejor se adapte a tus necesidades de preparación
        </p>
      </div>

      <div className="mt-12 space-y-4 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-6 lg:max-w-4xl lg:mx-auto xl:max-w-none xl:mx-0 xl:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`border rounded-lg shadow-sm divide-y ${
              plan.popular
                ? 'border-blue-500 ring-2 ring-blue-500'
                : 'border-gray-200'
            }`}
          >
            <div className="p-6">
              <h3 className="text-lg font-medium text-gray-900">{plan.name}</h3>
              {plan.popular && (
                <p className="mt-2 text-sm text-blue-600">
                  <Zap className="inline-block w-4 h-4 mr-1" />
                  Más popular
                </p>
              )}
              <p className="mt-4">
                <span className="text-4xl font-extrabold text-gray-900">
                  {plan.price}
                </span>
                <span className="text-base font-medium text-gray-500">
                  /{plan.period}
                </span>
              </p>
              <button
                onClick={() => navigate('/login')}
                className={`mt-8 block w-full rounded-md py-2 text-sm font-semibold text-white text-center ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700'
                    : 'bg-gray-600 hover:bg-gray-700'
                }`}
              >
                Comenzar ahora
              </button>
            </div>
            <div className="px-6 pt-6 pb-8">
              <h4 className="text-xs font-semibold text-gray-900 tracking-wide uppercase">
                Incluye
              </h4>
              <ul className="mt-6 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex space-x-3">
                    <Check className="flex-shrink-0 h-5 w-5 text-green-500" />
                    <span className="text-sm text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 