import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = 'admin@simulador-oece.com'; // O tu email de admin deseado
  const adminPassword = 'admin123'; // La contraseña que quieres para el admin

  // Verificar si el usuario ya existe
  const existingUser = await prisma.user.findUnique({
    where: { email: adminEmail },
  });

  if (!existingUser) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10);
    await prisma.user.create({
      data: {
        email: adminEmail,
        name: 'Administrador OECE',
        password: hashedPassword,
        role: 'admin',
        subscriptionStatus: 'active',
        subscriptionEndDate: new Date('2099-12-31T00:00:00.000Z'), // Fecha lejana
        isActive: true,
      },
    });
    console.log(`Usuario administrador de producción ${adminEmail} creado.`);
  } else {
    console.log(`Usuario administrador de producción ${adminEmail} ya existe.`);
    // Opcional: Actualizar datos si ya existe, por ejemplo, la fecha de suscripción
    // await prisma.user.update({
    //   where: { email: adminEmail },
    //   data: { 
    //     subscriptionStatus: 'active',
    //     subscriptionEndDate: new Date('2099-12-31T00:00:00.000Z'),
    //     isActive: true,
    //    },
    // });
    // console.log(`Usuario administrador ${adminEmail} actualizado.`);
  }
  // Puedes añadir aquí la creación de otros datos iniciales si los necesitas
}

main()
  .catch((e) => {
    console.error("Error durante el script de seed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
