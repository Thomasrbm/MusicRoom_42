import { eq } from "drizzle-orm";
import { db } from "../database/db";
import { accounts } from "../database/schema";

export async function usernameAlreadyUsed(username: string): Promise<boolean>
{
    const result = await db.select().from(accounts).where(eq(accounts.username, username));
    return result.length > 0;
}

export async function emailAlreadyUsed(email: string): Promise<boolean>
{
    const result = await db.select().from(accounts).where(eq(accounts.email, email));
    return result.length > 0;
}