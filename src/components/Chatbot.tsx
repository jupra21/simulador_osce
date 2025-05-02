import React, { useState, useEffect } from 'react';
import { useChatbot, Message } from '../context/ChatbotContext'; // Import Message type
import { MessageSquare, Send, X, Minus, Maximize2 } from 'lucide-react';

export const Chatbot: React.FC = () => {
  const { messages, addMessage } = useChatbot();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    if (isOpen && showWelcome) {
      setIsTyping(true);
      setTimeout(() => {
        // Ask for user role in the welcome message
        addMessage("¡Hola! 👋 Soy ALEC, tu Asistente Logístico en Contrataciones.\n\nPara ofrecerte la mejor ayuda con la Nueva Ley 32069 y la IA, ¿podrías indicarme si eres **servidor público** o **proveedor del estado**?", 'bot');
        setIsTyping(false);
        setShowWelcome(false);
      }, 1000);
    }
  }, [isOpen, showWelcome, addMessage]);

  // Efecto para scroll automático
  useEffect(() => {
    const chatContainer = document.getElementById('chat-messages');
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages, isTyping]);


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      const currentInput = inputMessage;
      // Create a proper Message object including timestamp
      const newUserMessage: Message = {
          message: currentInput,
          sender: 'user',
          timestamp: new Date() // Add timestamp
      };
      // Add the user message using the context function
      addMessage(newUserMessage.message, newUserMessage.sender);
      setInputMessage('');
      setIsTyping(true);

      // Construct the history *for the check* including the new message
      // Use the messages from context *after* update might be safer, but this works for immediate check
      const historyForCheck = [...messages, newUserMessage];

      setTimeout(() => {
        // Pass the input and the constructed history to getBotResponse
        const botResponse = getBotResponse(currentInput, historyForCheck);
        addMessage(botResponse, 'bot');
        setIsTyping(false);
      }, 1000);
    }
  };

  // Modified getBotResponse to handle initial role query
  const getBotResponse = (message: string, messageHistory: Message[]): string => {
    const messageLower = message.toLowerCase();

    // Check if this is the user's first response (history length = 2: bot welcome + user first reply)
    if (messageHistory.length === 2) {
      if (messageLower.includes('servidor') || messageLower.includes('público')) {
        return "Entendido. Como servidor público, puedo asistirte en optimizar tus procesos diarios en: \n🔹 Actos Preparatorios\n🔹 Fase de Selección\n🔹 Ejecución Contractual\nIntegrando las novedades de la Ley 32069 y herramientas de IA. ¿En qué etapa necesitas apoyo?";
      } else if (messageLower.includes('proveedor')) {
        return "¡Excelente! Como proveedor, puedo ayudarte a potenciar tu participación en los procesos de contratación. Usaremos IA para:\n🔹 Analizar bases y requerimientos\n🔹 Optimizar la elaboración de tu oferta\n🔹 Incrementar tus posibilidades de éxito\n¿Necesitas asistencia con alguna oferta en particular?";
      } else {
        // If the first response doesn't specify a role, ask again.
        return "No estoy seguro de tu rol. Por favor, indica si eres **servidor público** o **proveedor del estado** para personalizar mi ayuda.";
      }
    }

    // --- Existing logic for other topics (if it's not the first response) --- 
    if (messageLower.includes('nueva ley') || messageLower.includes('32069')) {
      return '📚 La Nueva Ley General de Contrataciones Públicas 32069 introduce cambios importantes:\n\n' +
             '1️⃣ Integración de IA en procesos de selección\n' +
             '2️⃣ Nuevos umbrales para procedimientos\n' +
             '3️⃣ Sistema de certificación digital\n' +
             '4️⃣ Contrataciones sostenibles\n' +
             '5️⃣ Modernización de la plataforma SEACE\n\n' +
             '¿Te gustaría profundizar en algún aspecto específico?';
    }

    if (messageLower.includes('inteligencia artificial') || messageLower.includes('ia')) {
       return '🤖 La Inteligencia Artificial en la Nueva Ley 32069:\n\n' +
             '• Evaluación automatizada de propuestas\n' +
             '• Detección de prácticas anticompetitivas\n' +
             '• Análisis predictivo de riesgos\n' +
             '• Asistencia virtual para consultas\n' +
             '• Optimización de procesos de selección\n\n' +
             'La certificación del OECE ahora incluye módulos específicos sobre IA en contrataciones públicas.';
    }

    if (messageLower.includes('certificacion') || messageLower.includes('certificación') || messageLower.includes('oece')) {
       return '🎯 Certificación del OECE 2025 - Enfoque en IA:\n\n' +
             '• Nuevos niveles de certificación\n' +
             '• Evaluación por competencias digitales\n' +
             '• Módulos especializados en IA\n' +
             '• Simuladores inteligentes\n' +
             '• Actualización continua vía blockchain\n\n' +
             'La certificación ahora es más dinámica y orientada a la transformación digital.\n\n' +
             'El examen de certificación del OECE:\n- Consta de 72 preguntas actualizadas\n- Cada pregunta vale 1 punto\n- Necesitas un mínimo de 54 puntos para aprobar\n- Las preguntas incluyen casos de IA y transformación digital.';
    }

    if (messageLower.includes('procedimiento') || messageLower.includes('selección')) {
      return 'Los procedimientos de selección incluyen:\n1. Licitación Pública\n2. Concurso Público\n3. Adjudicación Simplificada\n4. Subasta Inversa Electrónica\n5. Selección de Consultores Individuales\n6. Comparación de Precios\n7. Contratación Directa\n\n¿Sobre cuál te gustaría saber más?';
    }

    if (messageLower.includes('contratación directa')) {
      return 'La contratación directa se aplica en casos específicos como:\n- Situación de emergencia\n- Situación de desabastecimiento\n- Proveedor único\n- Servicios personalísimos\n- Servicios de publicidad estatal\n\nRecuerda que debe estar debidamente justificada.';
    }

    if (messageLower.includes('plazos') || messageLower.includes('tiempo')) {
      return 'Plazos importantes:\n- Licitación Pública: 22 días hábiles\n- Concurso Público: 22 días hábiles\n- Adjudicación Simplificada: 8 días hábiles\n- Selección de Consultores: 5 días hábiles\n\nEstos son plazos mínimos entre convocatoria y presentación de ofertas.';
    }

    if (messageLower.includes('buenas prácticas') || messageLower.includes('consejos')) {
      return '📝 Consejos para el examen:\n1. Lee cuidadosamente cada pregunta\n2. Identifica las palabras clave\n3. Elimina las opciones obviamente incorrectas\n4. Revisa la normativa actualizada\n5. Administra bien tu tiempo\n6. Si dudas, marca la pregunta para revisión posterior';
    }

    if (messageLower.includes('puntaje') || messageLower.includes('calificación')) {
      return 'El examen de certificación del OECE:\n- Consta de 72 preguntas actualizadas\n- Cada pregunta vale 1 punto\n- Necesitas un mínimo de 54 puntos para aprobar\n- Las preguntas incluyen casos de IA y transformación digital';
    }


    // Default response if no specific topic is matched *after* the role question
    return "Entendido. ¿Cómo puedo ayudarte hoy con la Ley 32069, la IA en contrataciones o los procedimientos?";
  };


  return (
    <>
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-110 group"
        >
          <MessageSquare className="w-6 h-6 group-hover:animate-pulse" />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce">
            Nuevo
          </span>
        </button>
      ) : (
        <div className={`fixed bottom-4 right-4 w-96 transition-all duration-300 ease-in-out ${
          isMinimized ? 'h-16' : 'h-[500px]'
        }`}>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden h-full flex flex-col animate-slide-up">
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-700 dark:to-blue-900 p-4 text-white flex justify-between items-center">
              <h3 className="font-semibold flex items-center gap-2 animate-float">
                <MessageSquare className="w-5 h-5" />
                <span>ALEC</span>
                <span className="text-xs bg-blue-500 px-2 py-1 rounded-full animate-pulse-slow">AI</span>
              </h3>
              {/* ... existing header buttons ... */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="text-white hover:text-gray-200 transition-colors transform hover:scale-110"
                >
                  {isMinimized ? <Maximize2 className="w-5 h-5" /> : <Minus className="w-5 h-5" />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-gray-200 transition-colors transform hover:scale-110"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {!isMinimized && (
              <>
                {/* ... existing messages display ... */}
                <div id="chat-messages" className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${
                        msg.sender === 'user' ? 'justify-end' : 'justify-start'
                      } animate-fade-in`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg transform transition-all duration-200 hover:scale-102 ${
                          msg.sender === 'user'
                            ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                            : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                        } shadow-md hover:shadow-lg`}
                      >
                        <pre className="whitespace-pre-wrap font-sans text-sm">{msg.message}</pre>
                      </div>
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-3 rounded-lg">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce-1"></div>
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce-2"></div>
                          <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce-3"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* Updated form placeholder */}
                <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder={messages.length <= 1 ? "Indica si eres servidor o proveedor..." : "Pregunta sobre la Nueva Ley 32069..."} // Dynamic placeholder
                      className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-400 transition-all duration-200"
                    />
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-2 rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
