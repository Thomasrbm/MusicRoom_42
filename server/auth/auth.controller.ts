import { Body, Controller, HttpCode, HttpStatus, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./auth.types";
import { FastifyReply } from "fastify";

@Controller("auth")
export class AuthController
{
    constructor(private authService: AuthService) {}

    @Post("register")
    @HttpCode(HttpStatus.CREATED)
    public async register(@Body() dto: RegisterDto,
                          @Res({passthrough: true}) response: FastifyReply)
    {
        const jwt = await this.authService.registerAccount(dto);
        response.setCookie("cookieJwt", jwt, {
            httpOnly: true,
            sameSite: "strict",
            // secure: true   a mettre apres
            path: "/",
        });
    }
}