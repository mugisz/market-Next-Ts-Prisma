import { disconnect } from 'process';
import { prisma } from './prisma-client'
import { hashSync } from 'bcryptjs'


async function up() {
    await prisma.user.createMany({
        data: [
            {
              fullName: 'User',
                email:'user@example.com',
                password:hashSync('123321', 10),
                verified:new Date(),
                role: 'USER',
            },
            {
                fullName: 'Admin',
                  email:'admin@example.com',
                  password:hashSync('123321', 10),
                  verified:new Date(),
                  role: 'ADMIN',
              },
            ]      
    })
}

async function down() {
    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE;`;
    // await prisma.$executeRaw`TRUNCATE TABLE "Product" RESTART IDENTITY CASCADE;`;
    // await prisma.$executeRaw`TRUNCATE TABLE "Order" RESTART IDENTITY CASCADE;`;
    // await prisma.$executeRaw`TRUNCATE TABLE "Pizza" RESTART IDENTITY CASCADE;`;
    // await prisma.$executeRaw`TRUNCATE TABLE "VerificationCode" RESTART IDENTITY CASCADE;`;

}
    async function main() {
        try {
          await down();
          await up();
        } catch (e) {
          console.error(e);
        }
      }
      
      main()
        .then(async () => {
          await prisma.$disconnect();
        })
        .catch(async (e) => {
          console.error(e);
          await prisma.$disconnect();
          process.exit(1);
        })