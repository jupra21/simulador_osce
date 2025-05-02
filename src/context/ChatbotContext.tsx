import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Message { // Added export
  message: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface ChatbotContextType {
  messages: Message[];
  addMessage: (message: string, sender: 'user' | 'bot') => void;
  clearMessages: () => void;
}

const ChatbotContext = createContext<ChatbotContextType | undefined>(undefined);

export const ChatbotProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const addMessage = (message: string, sender: 'user' | 'bot') => {
    setMessages(prev => [...prev, {
      message,
      sender,
      timestamp: new Date()
    }]);
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return (
    <ChatbotContext.Provider value={{ messages, addMessage, clearMessages }}>
      {children}
    </ChatbotContext.Provider>
  );
};

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (context === undefined) {
    throw new Error('useChatbot must be used within a ChatbotProvider');
  }
  return context;
};
