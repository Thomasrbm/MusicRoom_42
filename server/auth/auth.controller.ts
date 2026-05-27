import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { RegisterDto } from "./auth.types";

@Controller("auth")
export class AuthController
{
    constructor(private authService: AuthService) {}

    @Post("register")
    @HttpCode(HttpStatus.CREATED)
    public async register(@Body() dto: RegisterDto)
    {
        return await this.authService.registerAccount(dto);
    }
}