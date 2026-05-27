import { defineConfig } from "drizzle-kit";

// cherche ou est le schema
// out un binaire pour drizzle

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./database/drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});