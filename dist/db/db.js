import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client.js";
// Configura a conexão com PostgreSQL
const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
// Cria uma instância do Prisma
const prisma = new PrismaClient({ adapter });
export default prisma;
//# sourceMappingURL=db.js.map