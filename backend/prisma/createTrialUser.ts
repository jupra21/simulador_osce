import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createSingleTrialUser(email: string, name: string, password: string) {
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      console.log(`El usuario ${email} ya existe.`);
      return null;
    }

    const subscriptionEndDate = new Date();
    subscriptionEndDate.setDate(subscriptionEndDate.getDate() + 3); // Cambiado a 3 días

    const hashedPassword = await bcrypt.hash(password, 10);

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
    console.error(`Error al crear el usuario ${email}:`, error);
    return null;
  }
}

async function createMultipleTrialUsers() {
  const baseEmailDomain = '@simuladoroece.com';
  const baseName = 'Usuario de Prueba';
  const basePasswordPrefix = 'prueba';

  // Crear usuarios desde el 20 hasta el 30 (11 usuarios en total)
  for (let i = 20; i <= 30; i++) {
    const email = `usuarioprueba${i}${baseEmailDomain}`;
    const name = `${baseName} ${i}`;
    const password = `${basePasswordPrefix}${i}`;
    
    console.log(`Intentando crear usuario: ${name} (${email}) con contraseña: ${password}`);
    await createSingleTrialUser(email, name, password);
    await new Promise(resolve => setTimeout(resolve, 500)); 
  }
}

createMultipleTrialUsers()
  .then(async () => {
    console.log('Proceso de creación de usuarios de prueba finalizado.');
    await prisma.$disconnect();
    process.exit(0);
  })
  .catch(async (error) => {
    console.error('Error general en el script de creación de usuarios:', error);
    await prisma.$disconnect();
    process.exit(1);
  });
