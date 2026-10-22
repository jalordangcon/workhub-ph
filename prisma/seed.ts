import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SUPER_ADMIN_EMAIL ?? 'admin@workhubph.local';
  const password = process.env.SUPER_ADMIN_PASSWORD ?? 'ChangeMe123!';

  const existing = await prisma.user.findUnique({
    where: { email },
  });

  if (existing) {
    console.log(`Super admin already exists: ${email}`);
    return;
  }

  const passwordHash = await hash(password, 12);

  await prisma.user.create({
    data: {
      email,
      name: 'WorkHub PH Admin',
      passwordHash,
      role: 'SUPER_ADMIN',
    },
  });

  console.log(`Created super admin: ${email}`);
}

main()
  .catch((error) => {
    console.error('Failed to seed super admin', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
