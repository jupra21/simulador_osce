import { Request, Response, NextFunction } from 'express';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';

// Rate limiting para prevenir ataques de fuerza bruta
export const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // límite de 100 solicitudes por ventana
});

// Configuración de Helmet para seguridad adicional
export const securityMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Prevenir que el navegador MIME-sniffing una respuesta de su tipo de contenido declarado
  res.setHeader('X-Content-Type-Options', 'nosniff');
  
  // Prevenir clickjacking
  res.setHeader('X-Frame-Options', 'DENY');
  
  // Habilitar la protección XSS en navegadores antiguos
  res.setHeader('X-XSS-Protection', '1; mode=block');
  
  // Deshabilitar la cache para contenido dinámico
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  
  next();
};

// Validación de token JWT
export const validateJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  
  try {
    // Verificar token
    // TODO: Implementar verificación real de JWT
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};
