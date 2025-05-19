import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function createAdminUser() {
  const adminEmail = 'admin@simulador-oece.com';
  const adminPassword = 'admin123'; // La contraseña en texto plano que quieres usar

  // Verificar si el usuario ya existe
  const existingUser = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (existingUser) {
    console.log(`El usuario ${adminEmail} ya existe. Actualizando su rol y suscripción si es necesario.`);
    const updatedUser = await prisma.user.update({
      where: { email: adminEmail },
      data: {
        name: 'Administrador OECE (Actualizado)',
        role: 'admin',
        subscriptionStatus: 'active',
        subscriptionEndDate: new Date('2099-12-31T00:00:00.000Z'),
        isActive: true,
      },
    });
    console.log('Usuario administrador actualizado:', updatedUser);
    return updatedUser;
  } else {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(adminPassword, 10);

    // Crear el nuevo usuario administrador
    const newUser = await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Administrador OECE',
        password: hashedPassword,
        role: 'admin',
        subscriptionStatus: 'active',
        subscriptionEndDate: new Date('2099-12-31T00:00:00.000Z'),
        isActive: true,
      },
    });
    console.log('Nuevo usuario administrador creado:', newUser);
    return newUser;
  }
}

createAdminUser()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error('Error al crear/actualizar usuario admin:', e);
    await prisma.$disconnect();
    process.exit(1);
  });
