import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

interface JwtPayload {
  userId: string;
  role: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new Error();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload;
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
    });

    if (!user || !user.isActive) {
      throw new Error();
    }

    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Por favor autentícate.' });
  }
};

export const adminAuth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.user?.role !== 'admin') {
      return res.status(403).json({ error: 'Acceso denegado. Se requieren privilegios de administrador.' });
    }
    next();
  } catch (error) {
    res.status(403).json({ error: 'Acceso denegado.' });
  }
};
