const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const roles = require("./role");

async function main() {
  const result = await prisma.role.createMany({
    data: roles,
  });
  console.log(result);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
