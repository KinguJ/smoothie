import { PrismaClient } from '@prisma/client';
import sampleData from '@/db/sample-data';

async function main() {
  const prisma = new PrismaClient();
  await prisma.account.deleteMany();
  await prisma.session.deleteMany();
  await prisma.verificationToken.deleteMany();
  await prisma.user.deleteMany();

  await prisma.user.createMany({ data: sampleData.users });

  console.log('Database seeded successfully');
}

main();