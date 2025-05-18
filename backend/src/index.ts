import express from 'express';
import routes from './routes';
import { configureMiddleware } from './config/middleware';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

// Configurar middleware
configureMiddleware(app);

// Middleware para debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Rutas
app.use('/api', routes);

// Manejador de errores
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Algo salió mal!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
