import prisma from "./db/db.js";

async function main() {
    const cliente = await prisma.cliente.create({
        data: {
            nome: "José",
            email: "jose2@wwdsemail.com",
            endereco: "teste 42 - asdasd"
        }
    });

    const clienteEncontrado = await prisma.cliente.findFirst({
        where: {
            id: 3
        }
    });
    
    console.log("Cliente criado:", cliente);
    console.log("Cliente encontrado:", clienteEncontrado);
}
main()