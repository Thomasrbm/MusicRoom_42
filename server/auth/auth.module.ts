import { Module } from "@nestjs/common";
import { AppConfigModule } from "../config/config.module";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
// mini gestionnaire de packet pour tes endpoint 

@Module({
    imports: [AppConfigModule],
    providers: [AuthService],
    controllers: [AuthController]
})
export class AuthModule {}
