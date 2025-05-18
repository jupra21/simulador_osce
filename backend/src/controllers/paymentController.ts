import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createPayment = async (req: Request, res: Response) => {
  try {
    const { userId, amount, screenshot } = req.body;

    const payment = await prisma.yapePayment.create({
      data: {
        userId,
        amount,
        screenshot,
      },
    });

    res.status(201).json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar el pago' });
  }
};

export const verifyPayment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { status, notes } = req.body;
    const adminId = req.user?.userId;

    const payment = await prisma.yapePayment.update({
      where: { id },
      data: {
        status,
        notes,
        verifiedBy: adminId,
        verifiedAt: new Date(),
      },
    });

    // Si el pago es verificado, actualizar la suscripción del usuario
    if (status === 'verified') {
      await prisma.user.update({
        where: { id: payment.userId },
        data: {
          subscriptionStatus: 'active',
          subscriptionEndDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 días
        },
      });
    }

    res.json(payment);
  } catch (error) {
    res.status(500).json({ error: 'Error al verificar el pago' });
  }
};

export const listPayments = async (req: Request, res: Response) => {
  try {
    const payments = await prisma.yapePayment.findMany({
      include: {
        user: {
          select: {
            name: true,
            email: true,
          },
        },
      },
    });

    res.json(payments);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la lista de pagos' });
  }
};
