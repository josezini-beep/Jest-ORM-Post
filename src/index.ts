import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";

// Configura a conexão com PostgreSQL
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

// Cria uma instância do Prisma
const prisma = new PrismaClient({ adapter });

async function main() {
  // INSERT: cria um cliente
  const cliente = await prisma.cliente.create({
    data: {
      nome: "José",
      email: "jose@email.com",
    },
  });

  console.log("Cliente criado:", cliente);

  // SELECT: busca todos os clientes
  const clientes = await prisma.cliente.findMany();

  console.log("Clientes cadastrados:", clientes);
}

main()
  .catch((erro) => {
    console.error("Erro:", erro);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });