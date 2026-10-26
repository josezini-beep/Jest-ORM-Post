import prisma from "./db/db.js";
const bootstrap = async () => {
    //      const clientes = await prisma.cliente.findMany({
    //      
    //  });
    const newEntity = await prisma.cliente.findFirst({
        where: {
            id: 2
        }
    });
    //console.log("Clientes cadastrados:", clientes);
    console.log("Nova atualização", newEntity);
};
void bootstrap().finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=findyClients.js.map