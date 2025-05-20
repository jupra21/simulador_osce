import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createTrialUser(email: string, name: string, password: string) {
  try {
    // Verificar si el usuario ya existe
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log(`El usuario ${email} ya existe.`);
      return null;
    }

    // Calcular la fecha de fin de suscripción (5 días desde ahora)
    const subscriptionEndDate = new Date();
    subscriptionEndDate.setDate(subscriptionEndDate.getDate() + 5);

    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el nuevo usuario con período de prueba
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role: 'user',
        subscriptionStatus: 'trial',
        subscriptionEndDate,
        isActive: true,
      },
    });

    console.log('Nuevo usuario de prueba creado:', {
      email: newUser.email,
      name: newUser.name,
      subscriptionEndDate: newUser.subscriptionEndDate,
      subscriptionStatus: newUser.subscriptionStatus
    });
    
    return newUser;
  } catch (error) {
    console.error('Error al crear el usuario:', error);
    return null;
  }
}

// Crear un usuario de prueba
const email = 'usuario@prueba.com';
const name = 'Usuario de Prueba';
const password = 'prueba123';

createTrialUser(email, name, password)
  .then(() => process.exit(0))
  .catch((error) => {
    console.error('Error:', error);
    process.exit(1);
  });
