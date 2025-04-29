import React from 'react';
import { Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface TimerProps {
  timeRemaining: number;
  className?: string;
}

const Timer: React.FC<TimerProps> = ({ timeRemaining, className = '' }) => {
  const { theme } = useTheme();
  
  // Convertir segundos a formato hh:mm:ss
  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    return [hours, minutes, secs]
      .map(val => val.toString().padStart(2, '0'))
      .join(':');
  };
  
  // Determina el color del timer basado en el tiempo restante
  const getTimerColor = (): string => {
    if (timeRemaining <= 300) { // Menos de 5 minutos
      return 'text-red-500';
    } else if (timeRemaining <= 900) { // Menos de 15 minutos
      return 'text-orange-500';
    }
    return theme === 'dark' ? 'text-blue-400' : 'text-blue-600';
  };

  return (
    <div className={`flex items-center gap-2 font-mono ${getTimerColor()} ${className}`}>
      <Clock size={18} />
      <span className="text-lg font-semibold">{formatTime(timeRemaining)}</span>
    </div>
  );
};

export default Timer;