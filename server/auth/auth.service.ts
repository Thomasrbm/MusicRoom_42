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
        if (await usernameAlreadyUsed(dto.username))
            throw new ConflictException("Username already taken");
        if (await emailAlreadyUsed(dto.email))
            throw new ConflictException("Email already taken");

        const salt = await bcrypt.genSalt(parseInt(this.configService.salt));
        const hashedPass = await bcrypt.hash(dto.password, salt);

        await db.insert(accounts).values({
            username: dto.username,
            email: dto.email,
            password: hashedPass
        });
    }
}