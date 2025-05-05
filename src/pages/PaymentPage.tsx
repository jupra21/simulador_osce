import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Smartphone, Copy, ArrowRight, Check, ArrowLeft } from 'lucide-react'; // Importar ArrowLeft
import { useNavigate, useLocation, Link } from 'react-router-dom'; // Importar Link

const PaymentPage: React.FC = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [copied, setCopied] = useState(false);
  const yapeNumber = "975 767 053";
  const whatsappNumber = "960841214";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(yapeNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  const openWhatsapp = () => {
    window.open(`https://wa.me/51${whatsappNumber}?text=Hola,%20acabo%20de%20realizar%20el%20pago%20para%20el%20Plan%20Premium%20OECE.%20Adjunto%20mi%20comprobante:`, '_blank');
  };

  const handleLogin = () => {
    // Navigate to login with the current location as the redirect path
    navigate('/login', { state: { from: location } });
  };

  return (
    <div className={`min-h-screen py-12 px-4 ${
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
    }`}>
      <div className={`max-w-lg mx-auto rounded-2xl shadow-xl overflow-hidden ${
        theme === 'dark' ? 'bg-gray-800' : 'bg-white'
      }`}>
        {/* Header con Logo */}
        <div className="text-center p-6">
          <img 
            src="/images/payment-methods/yape-logo.png" 
            alt="Yape" 
            className="h-20 w-20 mx-auto mb-4"
          />
          <h2 className={`text-2xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Realiza tu Pago
          </h2>
          <p className={`text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Plan Premium OECE - S/. 50.00 (2 meses)
          </p>
        </div>

        {/* Proceso de Activación */}
        <div className={`p-6 ${
          theme === 'dark' ? 'bg-gray-700/50' : 'bg-gray-50'
        }`}>
          <h3 className={`text-lg font-semibold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Proceso de Activación
          </h3>

          {/* Número de YAPE */}
          <div className={`flex items-center justify-between p-4 mb-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-700' : 'bg-white'
          } shadow-sm`}>
            <div className="flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-blue-500" />
              <span className={`font-medium ${
                theme === 'dark' ? 'text-gray-200' : 'text-gray-700'
              }`}>YAPE al número:</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-lg">{yapeNumber}</span>
              <button
                onClick={copyToClipboard}
                className={`p-1.5 rounded-md transition-colors ${
                  theme === 'dark' ? 'hover:bg-gray-600' : 'hover:bg-gray-100'
                }`}
              >
                {copied ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <Copy className="w-5 h-5 text-gray-400" />
                )}
              </button>
            </div>
          </div>

          {/* Pasos numerados */}
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
                1
              </div>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Realiza el pago de S/. 50 usando YAPE al número indicado
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
                2
              </div>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Toma una captura de pantalla del pago realizado
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
                3
              </div>
              <div>
                <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                  Envía el comprobante por WhatsApp al número:
                </p>
                <p className="font-bold mt-1">{whatsappNumber}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
                4
              </div>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Recibirás tus credenciales de acceso en breve
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm">
                5
              </div>
              <p className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                Inicia sesión con tus credenciales y accede a los simuladores
              </p>
            </div>
          </div>
        </div>

        {/* Botones de Acción */}
        <div className="p-6 space-y-4">
          <button
            onClick={openWhatsapp}
            className="w-full py-3 px-4 bg-green-500 hover:bg-green-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors"
          >
            <span>Abrir WhatsApp para enviar comprobante</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={handleLogin}
            className={`w-full py-3 px-4 ${
              theme === 'dark' ? 
                'bg-blue-500 hover:bg-blue-600' : 
                'bg-blue-500 hover:bg-blue-600'
            } text-white font-medium rounded-lg flex items-center justify-center gap-2 transition-colors`}
          >
            <span>Iniciar Sesión</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <p className={`mt-2 text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Una vez verificado el pago, recibirás tus credenciales para acceder a todos los simuladores actualizados
          </p>

          {/* Enlace para volver al inicio */}
          <div className="mt-6 text-center border-t pt-4 ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}">
            <Link 
              to="/"
              className={`inline-flex items-center text-sm font-medium ${theme === 'dark' ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-500'} group`}
            >
              <ArrowLeft className="w-4 h-4 mr-1 transition-transform duration-200 group-hover:-translate-x-1" />
              Volver a la página principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
