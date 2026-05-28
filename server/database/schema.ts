import { uuid, pgTable, text, boolean } from "drizzle-orm/pg-core";
// drizzle schema (orm)

export const accounts = pgTable("accounts", {
    puuid: uuid("puuid").primaryKey().defaultRandom(),
    username: text("username").notNull(),
    email: text("email").notNull(),
    password: text("password").notNull(),
    has2fa: boolean("has2fa").default(false)
});

export const place = pgTable("place", {
    puuid: uuid("puuid").primaryKey().defaultRandom(),
    name: text("name").notNull(),
    hostId: text("hostId").notNull().references(() => accounts.puuid),
    isPublic: boolean("isPublic").notNull().default(true),
});