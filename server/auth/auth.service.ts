import { Injectable, Scope, ConflictException } from "@nestjs/common";
import { RegisterDto } from "./auth.types";
import { usernameAlreadyUsed, emailAlreadyUsed } from "./auth.utils";
import * as bcrypt from 'bcrypt';
import { AppConfigService } from "../config/config.service";
import { db } from "../database/db";
import { accounts } from "../database/schema";

@Injectable({ scope: Scope.DEFAULT })
export class AuthService
{
    constructor(private configService: AppConfigService) {}

    public async registerAccount(dto: RegisterDto)
    {
        console.log("TEST1");
        if (await usernameAlreadyUsed(dto.username))
            throw new ConflictException("Username already taken");
        console.log("TEST2");
        if (await emailAlreadyUsed(dto.email))
            throw new ConflictException("Email already taken");
        console.log("TEST3");
        const hashedPass = await bcrypt.hash(dto.password, this.configService.salt);
        console.log("TEST4");
        await db.insert(accounts).values({
            username: dto.username,
            email: dto.email,
            password: hashedPass
        });
        console.log("TEST5");
    }
}