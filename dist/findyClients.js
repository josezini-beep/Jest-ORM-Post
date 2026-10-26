import prisma from "./db/db.js";
const bootstrap = async () => {
    const clientes = await prisma.cliente.findMany();
    console.log("Clientes cadastrados:", clientes);
};
void bootstrap().finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=findyClients.js.map