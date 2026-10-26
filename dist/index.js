import prisma from "./db/db.js";
async function main() {
    // INSERT: cria um cliente
    const cliente = await prisma.cliente.create({
        data: {
            nome: "José",
            email: "jose@email.com",
            endereco: "teste 42 - asdasd"
        },
    });
    console.log("Cliente criado:", cliente);
}
main()
    .catch((erro) => {
    console.error("Erro:", erro);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=index.js.map