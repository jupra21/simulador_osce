import { Bot, ArrowLeft } from 'lucide-react'; // Importar ArrowLeft
import { useTheme } from '../context/ThemeContext';
import { useNavigate, Link } from 'react-router-dom'; // Importar Link

export default function SubscriptionPlans() {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const isDark = theme === 'dark';
  return (
    <div className="py-12 px-4">
      <div className={`max-w-6xl mx-auto ${isDark ? 'bg-gray-800' : 'bg-white'} rounded-2xl shadow-xl overflow-hidden transform transition-all duration-700 hover:shadow-2xl`}>
        {/* Header Section */}
        <div className="text-center py-12 px-6 bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-10 animate-grid"></div>
          <div className="relative">
            <div className="flex justify-center mb-6 transform transition-all duration-500 hover:scale-110">
              <Bot className="w-24 h-24 text-white opacity-90 animate-float" />
            </div>
            <h1 className="text-4xl font-bold text-white mb-4 animate-fadeIn">Plan Premium OECE</h1>
            <p className="text-xl text-blue-100 animate-slideUp">
              Potencia tu preparación con Inteligencia Artificial
            </p>
          </div>
        </div>

        {/* Precio Section */}
        <div className={`text-center py-8 px-6 bg-gradient-to-b ${isDark ? 'from-gray-800 to-gray-900' : 'from-blue-50 to-white'}`}>          <div className="inline-block bg-blue-500 text-white px-6 py-2 rounded-full mb-4 transform hover:scale-105 transition-all duration-300 animate-bounce">
            ¡2 MESES DE ACCESO COMPLETO!
          </div>
          <div className="inline-block transform hover:scale-110 transition-all duration-300">
            <span className={`text-5xl font-bold ${isDark ? 'text-white' : 'text-gray-900'} animate-fadeIn`}>
              S/. 50
            </span>
            <span className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              /2 meses
            </span>
          </div>
          <p className={`mt-2 text-lg ${isDark ? 'text-blue-400' : 'text-blue-600'} animate-slideUp`}>
            ¡Oferta Especial de Lanzamiento! • Solo S/. 25 por mes
          </p>
        </div>

        {/* CTA Section */}
        <div className={`text-center py-12 px-6 bg-gradient-to-t ${isDark ? 'from-gray-800 to-gray-900' : 'from-blue-50 to-white'}`}>          <div className={`max-w-xl mx-auto mb-8 ${isDark ? 'bg-gray-700' : 'bg-white'} rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300`}>
            <div className="flex items-center justify-center mb-6">
              <img 
                src="/images/payment-methods/yape-logo.png" 
                alt="Logo de Yape" 
                className="h-16 w-auto object-contain filter drop-shadow-xl animate-pulse"
              />
              <div className="ml-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full animate-bounce">
                ¡Método Preferido!
              </div>
            </div>
            <h3 className={`text-xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'} animate-fadeIn`}>
              ¿Cómo obtener acceso?
            </h3>
            <ol className={`list-decimal list-inside space-y-3 text-left ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
              <li className="transform hover:translate-x-2 transition-all duration-300">Da clic en el botón "Realizar Pago"</li>
              <li className="transform hover:translate-x-2 transition-all duration-300">Realiza el pago de S/. 50 vía YAPE</li>
              <li className="transform hover:translate-x-2 transition-all duration-300">Envía tu comprobante por WhatsApp</li>
              <li className="transform hover:translate-x-2 transition-all duration-300">Recibirás tus credenciales por WhatsApp</li>
              <li className="transform hover:translate-x-2 transition-all duration-300">Inicia sesión y accede a los simuladores</li>
            </ol>
          </div>          <button
            onClick={() => navigate('/payment')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-xl font-bold rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center mx-auto space-x-3 animate-bounce"
          >
            <Bot className="w-7 h-7 animate-spin-slow" />
            <span>Realizar Pago</span>
          </button>

          {/* Enlace para volver al inicio */}
          <div className="mt-8 text-center">
            <Link 
              to="/"
              className={`inline-flex items-center text-sm font-medium ${isDark ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} group`}
            >
              <ArrowLeft className="w-4 h-4 mr-1 transition-transform duration-200 group-hover:-translate-x-1" />
              Volver a la página principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}