import prisma from "./db/db.js";

async function main() {
  // INSERT: cria um cliente
  const cliente = await prisma.cliente.create({
    data: {
      nome: "José",
      email: "jose2@email.com",
      endereco: "teste 42 - asdasd"
    },
  });
 prisma.cliente.findFirst({
  where: {
    id: 3
  }
 })
  console.log("Cliente criado:", cliente);
}

main()
  .catch((erro) => {
    console.error("Erro:", erro);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });