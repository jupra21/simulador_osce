import cors from 'cors';
import express, { Express } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

export const configureMiddleware = (app: Express) => {
  // Configuración de CORS
  app.use(cors({    origin: [
      'http://localhost:5173', 
      'http://localhost:3001', 
      'https://simulador-oece.onrender.com',
      'https://examen-ocec.onrender.com'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization']
  }));

  // Configuración básica de seguridad
  app.use(helmet({
    contentSecurityPolicy: false // Deshabilitar temporalmente para desarrollo
  }));

  // Rate limiting
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100 // límite de 100 solicitudes por ventana
  });
  app.use(limiter);

  // Parsing de JSON
  app.use(express.json());
};
