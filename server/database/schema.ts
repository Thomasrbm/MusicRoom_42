import { boolean, pgTable, text } from "drizzle-orm/pg-core";

// drizzle schema (orm)

export const accounts = pgTable("accounts", {
    puuid: text("puuid").primaryKey(),
    username: text("username").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    has2fa: boolean("has2fa").default(false)
});