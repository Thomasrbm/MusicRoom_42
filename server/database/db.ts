import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// creer objet db (interragirat avec url de db qui tourne sur un port)

const client = postgres(process.env.DATABASE_URL!);

export const db = drizzle(client, { schema });