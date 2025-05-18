import express from 'express';
import { createUser, loginUser, listUsers, toggleUserStatus } from '../controllers/userController';
import { createPayment, verifyPayment, listPayments } from '../controllers/paymentController';
import { auth, adminAuth } from '../middlewares/auth';

const router = express.Router();

// Rutas públicas
router.post('/users/register', createUser);
router.post('/users/login', loginUser);

// Rutas protegidas para usuarios
router.post('/payments', auth, createPayment);

// Rutas protegidas para administradores
router.get('/admin/users', auth, adminAuth, listUsers);
router.patch('/admin/users/:id/toggle-status', auth, adminAuth, toggleUserStatus);
router.get('/admin/payments', auth, adminAuth, listPayments);
router.patch('/admin/payments/:id/verify', auth, adminAuth, verifyPayment);

export default router;
